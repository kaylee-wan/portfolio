# Kaylee Wan — Portfolio (GitHub Pages build)

Static build. No dependencies, no build step — upload this folder's contents and Pages serves it as-is.

## Publishing

1. Push these files to the repo root (or to `/docs`) on the `main` branch.
2. Repo → Settings → Pages → Source: *Deploy from a branch* → `main` → `/ (root)` (or `/docs`).
3. The site appears at `https://<username>.github.io/<repo>/`.

## Files

| File | Page |
|---|---|
| `index.html` | Main portfolio |
| `project-amazon.html` | People Analytics & Attrition Root-Cause — Amazon |
| `project-wayfair.html` | AI Agents for Market Intelligence — Wayfair |
| `project-bio-tshirt.html` | Orientation Leaders' T-Shirt Design |
| `project-crn-poster.html` | Pride Month Event Poster |
| `project-illustrations.html` | Houses, Drawn from Photographs |
| `support.js`, `image-slot.js` | Runtime used by the pages |
| `assets/` | Images, workflow diagrams, embedded reports, pitch deck PDF |

## Regenerating

This folder is a **copy**. Editing the source pages in the design project does not update it — the export has to be regenerated (filenames and internal links are rewritten during export).
