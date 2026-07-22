# White Corner Boxing Academy — Website

The complete website for White Corner Boxing Academy, Bengaluru — a fast, self-contained
site with a built-in editing dashboard so the content can be changed without any code.

## 🔗 Links

| What | Where |
|---|---|
| **Live website** | https://white-corner-boxing.netlify.app |
| **Editing dashboard** | https://white-corner-boxing.netlify.app/admin |
| **This code (GitHub)** | https://github.com/IBSS0090/-white-corner-boxing |
| **Hosting (Netlify)** | https://app.netlify.com |

## ✏️ How to edit the website (no code)

1. Go to **/admin** on the live site.
2. Log in with GitHub.
3. Pick a section, change a field, click **Publish → Publish now**.
4. The site rebuilds and updates automatically in about a minute.

Everything you edit is saved into this repository, so **GitHub is the single source of truth** —
all your content lives here.

## 🗂️ What's where

```
src/
  index.njk            → the whole webpage (design + layout)
  _data/               → your editable content (each file = a dashboard section)
    site.json          → phone, email, Register form link
    homepage.json      → hero headlines + session timings
    branches.json      → the 3 branch names, addresses & map pins
    pricing.json       → membership plans & prices
    programs.json      → the training programs
    coaches.json       → the coaches roster
    events.json        → event series
    testimonials.json  → member reviews
    faq.json           → frequently asked questions
    gallery.json       → gallery photo list
  blog/                → blog posts (one markdown file per article)
  assets/              → all images + the reel video (self-contained, no outside links)
  admin/               → the editing dashboard (Decap CMS) + its config
netlify/functions/     → the secure GitHub login handler for the dashboard
eleventy.config.js     → the build engine settings
netlify.toml           → hosting/build settings
docs/                  → project documents (proposal, etc. — not published)
```

## ⚙️ How it works

- Built with **Eleventy** (a static-site generator): content files + template → final website.
- Hosted on **Netlify**, which rebuilds and republishes automatically on every change.
- Editing is done through **Decap CMS** at `/admin`, which saves changes back into this repo.

## 🧑‍💻 Running it locally (optional, for a developer)

```
npm install
npm run dev      # preview at http://localhost:8080
npm run build    # build into the _site/ folder
```
