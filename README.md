# Ayush & Vedika — Wedding Invitation

Static wedding invitation site for **24 November 2026**, hosted on GitHub Pages.

## Pages

| File | What it shows |
|---|---|
| `index.html` | Landing page: "Ayush & Vedika" / 24 · Nov · 2026 — tap to open |
| `families.html` | Choose Groom's side or Bride's side |
| `groom.html` | Ayush's family function list |
| `bride.html` | Vedika's family function list |

## Customising

- **Background photo:** replace `images/background.jpg` with your own photo (keep the same file name). The current one is a placeholder from Unsplash.
- **Functions:** edit the `<li class="event">` blocks in `groom.html` and `bride.html` (day, month, name, time, venue). The current dates and functions are placeholders.
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
