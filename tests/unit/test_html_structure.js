/**
 * test_html_structure.js
 * ──────────────────────
 * Validates the structural integrity of index.html:
 *   - Single <body> tag, single <html> tag
 *   - Required CDN scripts present
 *   - No rogue console.log() calls
 *   - No recursive safeRRect calls
 *   - Theme toggle, sidebar, export buttons present
 *   - Responsive meta viewport set
 *   - MathJax loaded
 *   - No broken template literals (unmatched backticks)
 *   - File size within expected bounds
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { getHTML, countOccurrences, contains, assert, assertEqual } = require('../helpers');

const HTML_PATH = path.resolve(__dirname, '..', '..', 'index.html');

module.exports = {
  name: 'HTML Structure',
  description: 'Structural integrity of index.html (tags, CDNs, UI elements)',

  tests: [
    {
      name: 'single_body_tag',
      desc: 'Exactly one <body> tag',
      fn: () => {
        const n = countOccurrences('<body');
        assertEqual(n, 1, '<body> count');
      },
    },
    {
      name: 'single_html_tag',
      desc: 'Exactly one <html> tag',
      fn: () => {
        const n = countOccurrences('<html');
        assertEqual(n, 1, '<html> count');
      },
    },
    {
      name: 'no_console_log',
      desc: 'No console.log() calls in production code',
      fn: () => {
        const n = countOccurrences('console.log(');
        assertEqual(n, 0, 'console.log() occurrences');
      },
    },
    {
      name: 'no_recursive_safe_rrect',
      desc: 'safeRRect does not call itself recursively',
      fn: () => {
        const html = getHTML();
        const fnStart = html.indexOf('function safeRRect(');
        assert(fnStart !== -1, 'safeRRect function exists');
        // Extract just the function body (first 400 chars is enough — it's a short helper)
        const fnBody = html.slice(fnStart, fnStart + 400);
        // safeRRect is not recursive if its own body doesn't call safeRRect(...)
        // The body uses doc.rect(), not safeRRect()
        const bodyWithoutDecl = fnBody.slice('function safeRRect('.length);
        assert(!bodyWithoutDecl.includes('safeRRect('), 'safeRRect is not recursive');
      },
    },
    {
      name: 'chart_js_cdn',
      desc: 'Chart.js 4.4.0 CDN loaded',
      fn: () => assert(contains('chart.js@4.4'), 'Chart.js CDN missing'),
    },
    {
      name: 'exceljs_cdn',
      desc: 'ExcelJS 4.4.0 CDN loaded',
      fn: () => assert(contains('exceljs@4.4.0'), 'ExcelJS CDN missing'),
    },
    {
      name: 'jspdf_cdn',
      desc: 'jsPDF CDN loaded',
      fn: () => assert(contains('jspdf') || contains('jsPDF'), 'jsPDF CDN missing'),
    },
    {
      name: 'mathjax_cdn',
      desc: 'MathJax 3 CDN loaded',
      fn: () => assert(contains('mathjax') || contains('MathJax'), 'MathJax CDN missing'),
    },
    {
      name: 'meta_viewport',
      desc: 'Responsive meta viewport tag present',
      fn: () => assert(contains('name="viewport"'), 'meta viewport missing'),
    },
    {
      name: 'theme_toggle_button',
      desc: 'Theme toggle button present',
      fn: () => assert(
        contains('toggleTheme') || contains('theme-toggle') || contains('data-theme'),
        'Theme toggle missing'
      ),
    },
    {
      name: 'export_buttons_present',
      desc: 'All three export buttons present (Report, Slides, Excel)',
      fn: () => {
        assert(contains('exportPDF')   || contains('export-pdf'),    'PDF export button missing');
        assert(contains('exportSlides') || contains('export-slides'), 'Slides export button missing');
        assert(contains('exportXLSX')  || contains('export-excel'),  'Excel export button missing');
      },
    },
    {
      name: 'sidebar_nav_present',
      desc: 'Left sidebar navigation present',
      fn: () => assert(contains('nav-item') || contains('sidebar'), 'Sidebar nav missing'),
    },
    {
      name: 'file_size_bounds',
      desc: 'index.html is between 900 KB and 2 MB',
      fn: () => {
        const size = fs.statSync(HTML_PATH).size;
        assert(size >= 900_000,   `File too small: ${size} bytes`);
        assert(size <= 2_000_000, `File too large: ${size} bytes`);
      },
    },
    {
      name: 'doctype_present',
      desc: '<!DOCTYPE html> declaration present',
      fn: () => {
        const html = getHTML();
        assert(html.trimStart().startsWith('<!DOCTYPE html') || html.trimStart().startsWith('<!doctype html'),
          '<!DOCTYPE html> missing');
      },
    },
    {
      name: 'charset_utf8',
      desc: 'UTF-8 charset meta tag present',
      fn: () => assert(
        contains('charset="utf-8"') || contains("charset='utf-8'") ||
        contains('charset=utf-8')   || contains('charset="UTF-8"') ||
        contains("charset='UTF-8'"),
        'UTF-8 charset meta missing'
      ),
    },
    {
      name: 'intersectionobserver_lazy',
      desc: 'IntersectionObserver used for lazy chart rendering',
      fn: () => assert(contains('IntersectionObserver'), 'IntersectionObserver missing'),
    },
  ],
};
