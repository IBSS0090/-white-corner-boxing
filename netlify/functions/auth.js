// Starts the GitHub login for the CMS: sends the editor to GitHub to approve.
exports.handler = async (event) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const host = event.headers.host;
  const redirectUri = `https://${host}/api/callback`;
  const url =
    "https://github.com/login/oauth/authorize" +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    "&scope=repo" +
    "&state=whitecorner";
  return { statusCode: 302, headers: { Location: url }, body: "" };
};
