const Puppeteer = require('puppeteer');

module.exports = async function buildPdf(inputFile, outputFile) {
  const browser = await Puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.emulateMediaType('print');
  // A4 at 96dpi: 794×1123px. Viewport height must match paper height so
  // Puppeteer paginates by the paper size rather than the default 600px viewport.
  await page.setViewport({ width: 794, height: 1123 });
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });

  const defaultMargins = {
    top: '2.54cm',
    right: '2.54cm',
    bottom: '2.54cm',
    left: '2.54cm',
  };
  
  const narrowMargins = {
    top: '0.4cm',
    right: '1cm',
    bottom: '0.4cm',
    left: '1cm',
  };

  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: narrowMargins,
  });
  await browser.close();
};