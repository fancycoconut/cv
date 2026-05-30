# Curriculum Vitae - Kawai Wong

My personal CV, hosted on GitHub Pages with automatic HTML and PDF generation on every push to `master`.

## Live CV

[https://fancycoconut.github.io/cv](https://fancycoconut.github.io/cv)

## What does this project do?

* Manages my CV as a web app (HTML + CSS + JS).
* Automatically generates and publishes HTML and PDF versions on every push to `master` via GitHub Actions.

## Local Development

1. Install dependencies: `npm install`
1. Start local development server: `npm start`
1. Edit content in the `src` folder:
   - HTML template: [src/templates/index.html](src/templates/index.html)
   - Metadata/content: [src/metadata/metadata.js](src/metadata/metadata.js)

## Built With

- [HandlebarsJS](https://github.com/wycats/handlebars.js/) — template engine
- GitHub Pages — hosting
- GitHub Actions — CI/CD for auto-deployment
