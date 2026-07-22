// Finishes the GitHub login: swaps the code for a token and hands it back to the editor.
exports.handler = async (event) => {
  const code = (event.queryStringParameters || {}).code;
  if (!code) {
    return { statusCode: 400, body: "Missing code" };
  }

  let payload;
  try {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: process.env.OAUTH_CLIENT_ID,
        client_secret: process.env.OAUTH_CLIENT_SECRET,
        code,
      }),
    });
    payload = await res.json();
  } catch (e) {
    payload = { error: "token_request_failed", message: String(e) };
  }

  const token = payload && payload.access_token;
  const status = token ? "success" : "error";
  const content = token
    ? JSON.stringify({ token, provider: "github" })
    : JSON.stringify(payload);

  const body = `<!doctype html><html><head><meta charset="utf-8"></head><body>
<script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:${status}:${content.replace(/</g, "\\u003c")}',
      e.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>Signing you in… you can close this window.</p>
</body></html>`;

  return { statusCode: 200, headers: { "Content-Type": "text/html" }, body };
};
