# MasalaToMatcha links

The link-in-bio site for @masalatomatcha, live at **https://masalatomatchacollab.github.io**
(repo `masalatomatchacollab/masalatomatchacollab.github.io`, GitHub Pages from `main`): `index.html` (links and Follow) and `jobs.html` (free Japan job
starter list). Plain HTML and CSS, no build step. `avatar.jpg` is the profile photo.

## Publish changes
Commit and push to `main`; GitHub Pages updates in a minute or two. This Mac's GitHub CLI has several accounts, so
switch first: `gh auth switch --user masalatomatchacollab`, push, then switch back (`--user myreact67`).

## How it was set up on GitHub Pages
1. Create a public repository on GitHub. If you name it `<your-username>.github.io`, the site lives at
   `https://<your-username>.github.io/`; any other name gives `https://<your-username>.github.io/<repo>/`.
2. Upload these files to the repository (Add file → Upload files, or `git push`).
3. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`** → Save.
4. After a minute the address shows at the top of the Pages settings. Put it in Instagram:
   **Edit profile → Links → Add external link**.

## Keep it current
- **Broadcast channel:** the two "channel" buttons (`id="channel-link"`) open
  https://www.instagram.com/channel/Rrvq-1swxfAt-TYS/ . If you ever make a new channel, replace that link.
- **Job fairs:** remove a fair once its date has passed, and update "Last checked" in `jobs.html`.
- **Profile photo:** `avatar.jpg` is your Instagram photo at the only size Instagram shows publicly (100 px, enlarged).
  For a sharper one, replace `avatar.jpg` with the original photo, cropped square.

## Analytics (Google Analytics 4, free)
`analytics.js` sends page views and a `link_click` event for every tap, with `link_name` (e.g. the reel title or
"Japan job starter list"), `link_type` (reel, link, more reels), `link_section` and `link_url`. It stays off until
you paste your Measurement ID into `GA_ID` at the top of `analytics.js`.

1. Go to analytics.google.com → **Start measuring** (or Admin → **Create → Property**). Name it "MasalaToMatcha links",
   time zone Japan.
2. Choose **Web**, enter your GitHub Pages address, and create the stream. Copy the **Measurement ID** (`G-…`).
3. Put it in `analytics.js` (`const GA_ID = "G-…"`) and publish.
4. So the tap names show in reports: Admin → **Custom definitions → Create custom dimension**, scope **Event**, for
   each of `link_name`, `link_type` and `link_section`.
5. See taps live in **Reports → Realtime**; later in **Reports → Engagement → Events → link_click**, or an
   **Explore** table with `link_name` as the row.

## Daily checks (12 AM Japan time)
- **Dependabot** (`.github/dependabot.yml`) opens a pull request when a GitHub Action used here has a new version.
  The site has no other packages. Review and merge it on GitHub.
- **Daily check** (`.github/workflows/daily-check.yml`): a CodeQL security scan of the JavaScript (results in the
  Security tab) and a check of every link; broken links are listed in one issue, "Broken links on the site".
  Run it any time from Actions → Daily check → Run workflow.
- Dependabot security alerts and security updates are on in the repository settings.
