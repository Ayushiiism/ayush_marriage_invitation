# Ayush & Vedika — Wedding Invitation

Static wedding invitation site for **24 November 2026**, hosted on GitHub Pages.

## How it works

Everything lives in `index.html` as one page (so the music keeps playing), with four views:
home → choose family → groom's side / bride's side. `families.html`, `groom.html` and
`bride.html` only redirect to the matching view for old links.

The home page has an **English / हिंदी** switch; the choice is remembered on that device.

## Customising

- **Functions and all text (English + Hindi):** edit `js/app.js` — `TEXT` for page text, `EVENTS` for each side's functions.
- **Background photo:** replace `images/background.jpg` with your own photo (keep the same file name).
- **Background song:** add the file as `audio/song.mp3`. It starts when a guest taps "Tap to open"; the ♪ button (bottom-right) pauses/resumes it. The button stays hidden until the file exists.
- **Colours:** change the variables at the top of `css/style.css`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

1. Push to `main`.
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, Branch: `main`, folder: `/ (root)` → Save.
3. After a minute the site is live at `https://ayushiiism.github.io/ayush_marriage_invitation/`.
