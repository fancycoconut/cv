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
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (fmMatch) {
    for (const line of fmMatch[1].split('\n')) {
      const colon = line.indexOf(':');
      if (colon !== -1) {
        frontmatter[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
      }
    }
  }

  // Strip frontmatter and h1 company heading before parsing roles
  let content = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').replace(/^# .+\r?\n?/, '');

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

// Parse achievements markdown file into a flat string array
const achievementsMdPath = path.resolve(__dirname, 'metadata', templateData.achievements.achievementsMd.replace('./', ''));
const achievementsContent = fs.readFileSync(achievementsMdPath, 'utf8');
templateData.achievements = achievementsContent.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim());

// Parse skills markdown file into a structured skill group
const skillsMdPath = path.resolve(__dirname, 'metadata', templateData.skills.skillsMd.replace('./', ''));
const skillsContent = fs.readFileSync(skillsMdPath, 'utf8');
const skillsH1 = skillsContent.match(/^# (.+)$/m);
templateData.skills = [{
  name: skillsH1 ? skillsH1[1].trim() : '',
  examples: skillsContent.split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim()),
}];

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