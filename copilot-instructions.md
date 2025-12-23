# Copilot instructions for vivchawda.github.io

Purpose: help AI coding agents be productive editing and extending this static portfolio (no build system).

- Big picture:
  - This is a plain static GitHub Pages site served from repository root. The homepage is `index.html`.
  - Case studies live under `cs/` (example: `cs/RADAR.html`, `cs/RADAR_bak.html`). CV assets are in `cv/` and images in `images/`.
  - No npm, bundler, or build step — edits are direct HTML/CSS/JS changes.

- Key patterns & conventions (use these exactly):
  - Styles are primarily inline in each HTML file; when adding pages, copy the existing CSS header from `index.html` or `cs/RADAR.html` to preserve theme and tokens.
  - Google Analytics `gtag` snippet is present in `index.html` and `cs/*` pages. Keep the same snippet (G-C04MG51NWX) when creating new pages.
  - Navigation and header layout are repeated across pages — create new pages by duplicating an existing page (e.g., `cs/RADAR.html`) and updating meta/title/description.
  - Accessibility: many pages include a `.skip-link` pattern — maintain skip links and sensible focus states for keyboard users.

- File conventions and examples:
  - Homepage: `index.html` — central entry and nav links. Modify nav links here if you add new top-level pages.
  - Case study example: `cs/RADAR.html` — follow its structure: meta, GA snippet, CSS variables, header/nav, hero, sections, and footer.
  - Images: put assets in `images/` and reference with relative paths (e.g., `images/hero.jpg`). Add descriptive `alt` text.

- Developer workflows (how to preview, test, and deploy):
  - Preview locally with a simple static server from repo root:

    ```bash
    python3 -m http.server 8000
    # then open http://localhost:8000/
    ```

  - Deployment: this repo is a GitHub Pages site (repo name indicates user site). Publish by committing and pushing to the default branch — GitHub serves files from the root.
  - No tests or CI configured; review changes visually after pushing or via local server.

- Integration points & external deps:
  - Google Analytics (`gtag`) — do not remove the snippet unless instructed.
  - External fonts are not used — system fonts preferred; adding web fonts should be done sparingly and included in the page head.

- When adding content or features, follow these practical rules:
  - Preserve the existing look: reuse CSS variables and header/nav structure from `index.html` or `cs/RADAR.html`.
  - Keep JavaScript minimal and inline per-page unless migrating to a richer client app is requested.
  - Name new pages consistently and keep links updated in `index.html` nav.
  - Use descriptive `alt` text for images; keep file names URL-friendly (lowercase, dashes preferred). Note: some existing files use uppercase (RADAR.html) — prefer lowercase for new files.

- Examples (copy/paste checklist when adding a case study):
  1. Copy `cs/RADAR.html` → `cs/<your-case>.html`.
  2. Update `<title>` and `<meta name="description">`.
  3. Keep the `gtag` block unchanged.
  4. Add images under `images/` and reference relatively.
  5. Add a nav link in `index.html` (update header `.nav`).

 - Ready-to-copy template:
   - A canonical template is provided at `cs/template.html`. Copy this file and edit the hero, sections, and assets references.

- What not to do:
  - Do not introduce a complex build system (webpack, gulp) without prior discussion — the repo is intentionally simple.
  - Do not remove analytics or alter tracking IDs without confirmation.

- Feedback request:
  - If any section is unclear or you want a canonical page template, say which part and I'll add a short template snippet or expand this file.
