const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const buildPdf = require('./utils/pdf.js');

const srcDir = __dirname;
const outputDir = __dirname + '/../dist';

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Parse work experience markdown files into structured roles
templateData.experience = templateData.experience.map(entry => {
  if (!entry.experienceMd) return entry;
  const mdPath = path.resolve(__dirname, 'metadata', entry.experienceMd.replace('./', ''));
  const raw = fs.readFileSync(mdPath, 'utf8');

  // Parse YAML frontmatter (simple key: value pairs only)
  const frontmatter = {};
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (fmMatch) {
    for (const line of fmMatch[1].split('\n')) {
      const colon = line.indexOf(':');
      if (colon !== -1) {
        frontmatter[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
      }
    }
  }

  // Strip frontmatter and h1 company heading before parsing roles
  let content = raw.replace(/^---\n[\s\S]*?\n---\n/, '').replace(/^# .+\n?/, '');

  const roles = [];
  for (const section of content.split(/^## /m).filter(s => s.trim())) {
    const lines = section.split('\n');
    const title = lines[0].trim();
    const h3Match = section.match(/^### (.+)$/m);
    let start = '', end = '';
    if (h3Match) {
      const parts = h3Match[1].split(/\s+[-—–]\s+/);
      start = parts[0].trim();
      end = parts[1] ? parts[1].trim() : '';
    }
    const items = lines.filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
    roles.push({ title, start, end, items });
  }

  return {
    ...entry,
    ...(frontmatter.location && { location: frontmatter.location }),
    ...(frontmatter.className && { className: frontmatter.className }),
    roles,
  };
});

// Parse achievements markdown files into flat string arrays
templateData.achievements = templateData.achievements.flatMap(entry => {
  if (!entry.achievementsMd) return [entry];
  const mdPath = path.resolve(__dirname, 'metadata', entry.achievementsMd.replace('./', ''));
  const content = fs.readFileSync(mdPath, 'utf8');
  return content.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
});

// Parse skills markdown files into structured skill groups
templateData.skills = templateData.skills.map(entry => {
  if (!entry.skillsMd) return entry;
  const mdPath = path.resolve(__dirname, 'metadata', entry.skillsMd.replace('./', ''));
  const content = fs.readFileSync(mdPath, 'utf8');
  const h1Match = content.match(/^# (.+)$/m);
  const name = h1Match ? h1Match[1].trim() : '';
  const examples = content.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());
  return { ...entry, name, examples };
});

// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);
const pdfFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`;
const html = template({
  ...templateData,
  baseUrl: 'https://fancycoconut.github.io/cv',
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});

fs.writeFileSync(outputDir + '/index.html', html);

// Build PDF
buildPdf(`${outputDir}/index.html`, `${outputDir}/${pdfFileName}`);