var walk = require('./walk-dir');
var path = require('path');

var patternPath = `${__dirname}/../../public/patterns/`;

/**
 * Scan for page and template patterns.
 */
const files = walk(patternPath)
  .filter(f =>
    // Only *.html
    f.match(/\.html$/)
    // Not index.html/markup-only.html
    && !f.match(/(\/index|markup-only|.escaped)\.html$/)
    // Only templates and pages.
    && f.match(/\/(01-molecules|02-organisms|03-templates)/)
    // Not the readme (has version #)
    && !f.match(/04-pages-readme2.html$/)
  );

/**
 * Map discovered HTML files to Backstop scenarios.
 */
const scenarios = files.map(file => ({
  label: path.basename(file, '.html')
    .replace('04-pages-', 'page-')
    .replace('03-templates-', 'template-')
    .replace('02-organisms-', 'organism-')
    .replace('01-molecules-', 'molecule-')
    .replace('.rendered', '')
    .replace('-', ' '),
  url: `http://web/patterns/${path.relative(patternPath, file)}`,
  misMatchThreshold: 0.15,
}));

module.exports = {
  id: 'regression',
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480,
    },
    {
      label: 'tablet',
      width: 1024,
      height: 768,
    },
    {
      label: 'desktop',
      width: 1920,
      height: 1080,
    },
  ],
  onBeforeScript: 'onBefore.js',
  onReadyScript: 'onReady.js',
  scenarios: scenarios,
  paths: {
    bitmaps_reference: `${__dirname}/reference`,
    bitmaps_test: `${__dirname}/runs`,
    engine_scripts: `${__dirname}/scripts`,
    html_report: `${__dirname}/reports/html`,
    ci_report: `${__dirname}/reports/ci`,
  },
  report: ['browser', 'CI'],
  engine: 'puppeteer',
  engineFlags: [],
  engineOptions: {
    ignoreHTTPSErrors: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 15,
  debug: true,
  debugWindow: false,
};
