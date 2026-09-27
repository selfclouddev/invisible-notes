# Invisible Notes

Private notes on lines of code for PhpStorm and other JetBrains IDEs. Notes appear inline in the editor, follow the
code through edits, branch switches and file moves, and are never written into your files or version control.

**Website and documentation: https://selfclouddev.github.io/invisible-notes/**

![PhpStorm with three invisible notes between the lines of a PHP class](src/assets/screenshots/1-notes-in-the-editor.png)

This repository holds the plugin's website only. Invisible Notes itself is distributed through JetBrains Marketplace;
see [Installation](https://selfclouddev.github.io/invisible-notes/getting-started/installation/).

Questions and problem reports: [florin@selfcloud.ro](mailto:florin@selfcloud.ro).

## Working on the website

The site is built with [Astro Starlight](https://starlight.astro.build). The pages are Markdown files in
`src/content/docs/`, and the sidebar is defined in `astro.config.mjs`.

| Command           | What it does                                           |
| ----------------- | ------------------------------------------------------ |
| `npm install`     | Installs the dependencies                              |
| `npm run dev`     | Serves the site at `http://localhost:4321/invisible-notes/`, reloading on changes |
| `npm run build`   | Builds the site into `dist/`                           |
| `npm run preview` | Serves the built site locally                          |

Every push to `main` publishes the site to GitHub Pages (`.github/workflows/deploy.yml`).
