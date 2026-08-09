# Kaylee (Li) Wan — Portfolio

Personal portfolio website, built in Claude Design and deployed as a static site via GitHub Pages.

🔗 **Live site:** _add your GitHub Pages URL here once deployed_

## Structure

```
index.html      → main page, entry point for GitHub Pages
assets/
  breaking-games-logo.webp
  wayfair-logo.png
  resume.pdf     → linked from the "Download Resume" button
```

## Deployment notes

- This site is a **static export from Claude Design**. The exported HTML references images and the resume PDF via **relative paths** (e.g. `./assets/wayfair-logo.png`), so `index.html` and `assets/` must always stay in the same folder, at the same level — don't nest them differently.
- The page loads React/ReactDOM and Google Fonts from a CDN at runtime, so it needs an internet connection to render (this is expected — GitHub Pages serves it fine, but the file won't fully render if opened offline).
- GitHub Pages auto-detects `index.html` at the repo root as the homepage — no build step or GitHub Actions workflow is required for this static file.

## Updating the site

**Small changes** (text tweaks, swapping an image, color tweaks):
Edit `index.html` directly and push. The file is a bundled/minified export, so it's not the easiest to hand-edit, but small changes are manageable.

**Bigger changes** (new sections, layout changes, new projects):
1. Go back to the Claude Design project and make changes there.
2. Re-export as a **Standalone** HTML file.
3. **Before deploying, double-check the export is complete** — Claude Design's export has previously left out referenced files (e.g. `resume.pdf` was missing from an earlier export). Search the exported HTML for `./assets/...` references and confirm every referenced file actually exists in the zip before replacing the deployed files.
4. Replace `index.html` (and any new/changed files in `assets/`) in this repo and push.

## History

- Initial deploy required manually re-pairing the `assets/` folder with the exported `index.html`, since a single-file export left out the logo images.
- `resume.pdf` was missing from the Claude Design export entirely and was added manually to `assets/`.
