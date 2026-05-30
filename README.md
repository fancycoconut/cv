# Curriculum Vitae - Kawai Wong

My personal CV, hosted on GitHub Pages with automatic HTML and PDF generation on every push to `master`.

## Live CV

[https://fancycoconut.github.io/cv](https://fancycoconut.github.io/cv)

## How it works

The build script (`src/build.js`) compiles a Handlebars template with structured content data, then uses Puppeteer to render the HTML into a PDF. Both outputs land in `dist/` and are deployed to GitHub Pages on every push to `master`.

```
src/metadata/metadata.js  ──┐
src/metadata/work-experience/*.md  ─┤  build.js  ──►  dist/index.html
src/templates/index.html  ──┘                    └──►  dist/<name>.pdf
src/assets/               ──────────────────────────►  dist/ (copied as-is)
```

Work experience bullet points live in per-company Markdown files under `src/metadata/work-experience/`. The build parses each file's H2 (role title), H3 (date range), and bullet list into the `roles` array at build time. Everything else (personal info, achievements, skills, interests) stays in `metadata.js`.

## Project Structure

```
cv/
├── src/
│   ├── build.js                        # Build entry point
│   ├── assets/
│   │   ├── favicon.ico
│   │   └── styles.css                  # Custom styles (Bootstrap 4 base)
│   ├── metadata/
│   │   ├── metadata.js                 # Personal info, achievements, skills, interests, experience structure
│   │   └── work-experience/            # One .md file per employer
│   │       ├── pushpay.md
│   │       ├── fisher-and-paykel-healthcare.md
│   │       ├── datacom.md
│   │       ├── acit.md
│   │       └── hansen-technologies.md
│   ├── templates/
│   │   └── index.html                  # Handlebars template
│   └── utils/
│       ├── helpers/
│       │   └── markdown.js             # Handlebars markdown helper (marked)
│       └── pdf.js                      # Puppeteer PDF renderer
├── archive/                            # Historical PDF snapshots
├── dist/                               # Build output (gitignored)
├── .github/workflows/
│   ├── ci.yml                          # Runs build on pull requests
│   └── gh-pages.yml                    # Builds and deploys to GitHub Pages on push to master
└── package.json
```

## Work Experience Markdown Format

Each file in `src/metadata/work-experience/` follows this structure:

```markdown
---
company: Company Name
---
# Company Name

## Role Title

### Start Date - End Date

- Bullet point one
- Bullet point two
```

- H2 → role title
- H3 → date range (split on ` - ` or ` — ` to produce `start` and `end`)
- Bullet list → role items
- Multiple H2 sections in one file represent multiple roles at the same company

The YAML frontmatter and H1 company heading are stripped at build time; the company name displayed in the CV comes from `metadata.js`.

## Local Development

```bash
npm install       # Install dependencies
npm start         # Build, then watch for changes with live reload at http://localhost:3000
npm run build     # One-off build to dist/
```

Editing any file under `src/` triggers an automatic rebuild and browser refresh.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow (`.github/workflows/gh-pages.yml`), which builds the project and deploys `dist/` to GitHub Pages. Pull requests run a build check via `ci.yml` to catch errors before merge.

## Built With

- [Handlebars](https://github.com/wycats/handlebars.js/) — template engine
- [marked](https://github.com/markedjs/marked) — Markdown parser
- [Puppeteer](https://github.com/puppeteer/puppeteer) — headless Chrome PDF generation
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/) — base styles
- GitHub Pages — hosting
- GitHub Actions — CI/CD
