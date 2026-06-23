# GitHub Pages Deployment Guide

This portfolio is now a fully static site — it can be hosted for free on GitHub Pages.

## 1. Set up Formspree (free) for the contact form

1. Go to https://formspree.io and sign up (use `bernardo.borges@ua.pt` so messages arrive there).
2. Click **New Form** → name it "Portfolio Contact" → copy the form endpoint, e.g.
   `https://formspree.io/f/xpzgkqwa` → the ID is the part after `/f/` (`xpzgkqwa`).
3. Open `/app/frontend/.env` and add:
   ```
   REACT_APP_FORMSPREE_ID=xpzgkqwa
   ```
4. The first time you submit the form, Formspree will email you to confirm — click the link.

## 2. Build the static site

From `/app/frontend`:
```bash
yarn install
yarn build
```
The production-ready static files will be in `frontend/build/`.

## 3. Push to GitHub Pages

Two simple options:

### Option A — Use `gh-pages` package
```bash
cd frontend
yarn add -D gh-pages
```

Add to `frontend/package.json`:
```json
"homepage": "https://bennytime.github.io/<your-repo-name>",
"scripts": {
  "deploy": "gh-pages -d build"
}
```

Then:
```bash
yarn build && yarn deploy
```

### Option B — Manual
1. Create a new GitHub repo (e.g. `portfolio`)
2. Push `frontend/build/*` to a branch called `gh-pages`
3. In repo Settings → Pages → set source to `gh-pages` branch, root folder
4. Your site will be live at `https://bennytime.github.io/portfolio`

## 4. Custom domain (optional)
- In repo Settings → Pages → Custom domain, enter your domain.
- Add a `CNAME` record at your DNS provider pointing to `bennytime.github.io`.

## What you can ignore
The `/app/backend` folder is no longer needed for deployment — it's only used in this Emergent preview. You can delete it before pushing to GitHub, or just leave it.
