# Going Live on whitecornerboxing.in

How to move your real domain (`whitecornerboxing.in`) onto this new site, **without moving the
site off Netlify** — so your `/admin` dashboard and GitHub editing keep working.

> **Key idea:** the website STAYS on Netlify. You only point the domain *at* Netlify (like
> forwarding a phone number). You are NOT moving the site to Hostinger.

## Before you start
- You'll need your **GoDaddy** login (where the domain is registered).
- You already have **Netlify** and **GitHub** access.

## The checklist

- [ ] **1. Back up the old WordPress site** (Hostinger → export/backup), then you can remove it whenever.

- [ ] **2. Add the domain in Netlify:** Netlify → your site `white-corner-boxing` → **Domain settings** →
      **Add a domain** → enter `whitecornerboxing.in`. Netlify will show you the DNS settings to use.

- [ ] **3. Point the domain to Netlify** (pick ONE):
  - **Recommended — move nameservers (needs GoDaddy):** at GoDaddy, change the domain's
    **nameservers** to the ones Netlify gives you. This hands all DNS to Netlify and fully
    leaves Hostinger behind.
  - **Alternative — change records (needs only Hostinger):** in Hostinger's DNS zone, set the
    **A record** (`@`) and the **www** record to the values Netlify shows. No GoDaddy needed.

- [ ] **4. Wait for it to spread** (15 min – few hours). Netlify auto-issues the HTTPS padlock.

- [ ] **5. Update the login for the new domain** (ask your developer / Claude to do this):
  - In the code: `src/admin/config.yml` → change `base_url`, `site_url`, `display_url` to
    `https://whitecornerboxing.in`. Commit + push.
  - In GitHub → **Settings → Developer settings → OAuth Apps** → your app →
    change **Homepage URL** and **Authorization callback URL** to use `whitecornerboxing.in`
    (callback = `https://whitecornerboxing.in/api/callback`).

## After it's live
- `whitecornerboxing.in` shows the new site. ✅
- `whitecornerboxing.in/admin` still logs you in and edits (saves to GitHub). ✅
- Submit `https://whitecornerboxing.in/` to **Google Search Console** (the SEO was already
  built for this domain). ✅
- The old `white-corner-boxing.netlify.app` URL keeps working as a backup.

## What does NOT change
- Photos/videos use `/assets/…` paths → work on any domain.
- The dashboard is tied to the Netlify site, not the domain → keeps working.
- Only the OAuth callback URL needs the new domain (step 5).
