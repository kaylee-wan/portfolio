# Kaylee (Li) Wan — Portfolio Site

Static personal portfolio site. Plain HTML/CSS/JS — no build step, no dependencies.

## Files

- `index.html` — main page (Hero, About, Projects, Experience, Resume, Contact)
- `project-breaking-games.html` — Breaking Games project case study (placeholder content)
- `project-wayfair.html` — Wayfair project case study (placeholder content)
- `project-amazon.html` — Amazon project case study (placeholder content)
- `assets/` — images, logos, resume PDF

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `kaylee-wan-portfolio`).
2. Upload all files in this folder to the repo root, keeping the `assets/` folder intact.
3. Go to **Settings → Pages**.
4. Under **Source**, select the branch (usually `main`) and folder `/ (root)`.
5. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## To customize later

- **Resume**: replace `assets/resume.pdf` with your real resume (keep the same filename), and replace `assets/resume-preview.png` with a screenshot/export of its first page (same filename) so it displays inline.
- **Project case studies**: each `project-*.html` file is a placeholder built from a 6-step template (Title → Summary → Links/Evidence/Graphs → How I Built It → Challenges → What I Learned + Next Step). Replace the placeholder text and the two dashed image boxes in the "Links & Evidence" section with real screenshots/graphs. If you build a fully custom replacement page, keep it at the same filename (e.g. `project-breaking-games.html`) or update the link in `index.html`'s Projects section to match your new filename.
- **Headshot / project card images**: swap the files in `assets/` (`headshot.webp`, `project-breaking-games.webp`, `project-wayfair.png`, `project-amazon.webp`) — keep the same filenames, or update the `src` in `index.html`.
- **Text edits**: all copy is plain text inside the HTML — search and edit directly, no template syntax involved.

## Notes

- The Resume section's zoom controls and this page's animations are plain vanilla JS/CSS — no external libraries required.
- Tested to work fully offline once uploaded (no external calls except Google Fonts).
