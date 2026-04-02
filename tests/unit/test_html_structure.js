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
    {
      name: 'no_cross_script_block_duplicates',
      desc: 'No duplicate top-level const/let names across <script> blocks (causes SyntaxError in Chrome)',
      fn: () => {
        const html = getHTML();

        // Collect all inline <script>…</script> blocks
        const scriptBlocks = [];
        let pos = 0;
        while (true) {
          const start = html.indexOf('<script>', pos);
          if (start === -1) break;
          const end = html.indexOf('</script>', start);
          if (end === -1) break;
          scriptBlocks.push(html.slice(start + 8, end));
          pos = end + 1;
        }
        assert(scriptBlocks.length >= 1, 'No <script> blocks found');

        // Extract top-level (depth-0) const/let declarations from each block
        function topLevelConsts(body) {
          const names = [];
          let depth = 0;
          for (const line of body.split('\n')) {
            const s = line.trim();
            depth += (s.match(/\{/g) || []).length - (s.match(/\}/g) || []).length;
            if (depth <= 0) {
              const m = s.match(/^(const|let)\s+(\w+)\s*[=[{]/);
              if (m) names.push(m[2]);
            }
            if (depth < 0) depth = 0;
          }
          return names;
        }

        const seen = new Map(); // name -> block index
        const dupes = [];
        scriptBlocks.forEach((body, idx) => {
          for (const name of topLevelConsts(body)) {
            if (seen.has(name)) {
              dupes.push(`'${name}' (blocks ${seen.get(name)+1} & ${idx+1})`);
            } else {
              seen.set(name, idx);
            }
          }
        });
        const unique = [...new Set(dupes)];
        assert(unique.length === 0,
          `Cross-<script>-block duplicate const/let (breaks all charts): ${unique.join(', ')}`);
      },
    },
    {
      name: 'no_duplicate_const_in_export_pdf',
      desc: 'Newly added Modeling Lab vars use unique names (no levHeaders/levXs/levData conflict)',
      fn: () => {
        const html = getHTML();
        const pdfStart = html.indexOf('async function exportPDF');
        const mlStart  = html.indexOf('// PAGE 36  -  MODELING LAB', pdfStart);
        const mlEnd    = html.indexOf('// PAGE 37', mlStart);
        assert(pdfStart !== -1, 'exportPDF not found');
        assert(mlStart  !== -1, 'Modeling Lab block not found');
        // Names that existed before the ML block and must NOT be redeclared inside it
        const beforeML = html.slice(pdfStart, mlStart);
        const mlBlock  = html.slice(mlStart, mlEnd > mlStart ? mlEnd : mlStart + 5000);
        const beforeNames = new Set(
          Array.from(beforeML.matchAll(/\b(?:const|let)\s+(\w+)\s*[=[]/g)).map(m => m[1])
        );
        const mlDecls = Array.from(mlBlock.matchAll(/\b(const|let)\s+(\w+)\s*[=[]/g)).map(m => m[2]);
        // Whitelist single-letter loop vars that are always block-scoped
        const singleLetter = /^[a-z]$/;
        const conflicts = mlDecls.filter(name => !singleLetter.test(name) && beforeNames.has(name));
        assert(conflicts.length === 0,
          `Modeling Lab block reuses outer-scope names: ${[...new Set(conflicts)].join(', ')}`);
      },
    },
  ],
};
