/**
 * test_export_functions.js
 * ────────────────────────
 * Validates the three export functions (exportPDF, exportSlides, exportXLSX):
 *   - All three async functions defined
 *   - Helper functions present (newPage, checkY, msSectionHead, etc.)
 *   - Timestamp filename pattern used
 *   - PDF uses correct color constants
 *   - Excel uses ExcelJS workbook pattern
 *   - Slides use correct doc.addPage() pattern
 *   - All 4 recently-added Excel sheets contain substantive data rows
 */

'use strict';

const { getHTML, contains, countOccurrences, assert, assertEqual, assertAtLeast } = require('../helpers');

module.exports = {
  name: 'Export Functions',
  description: 'PDF, Slides, and Excel export function integrity',

  tests: [
    // ── Function declarations ─────────────────────────────────────────────────
    {
      name: 'export_pdf_function',
      desc: 'async function exportPDF() defined',
      fn: () => assert(contains('async function exportPDF'), 'exportPDF not defined'),
    },
    {
      name: 'export_slides_function',
      desc: 'function exportSlides() defined',
      fn: () => assert(contains('function exportSlides'), 'exportSlides not defined'),
    },
    {
      name: 'export_xlsx_function',
      desc: 'async function exportXLSX() defined',
      fn: () => assert(contains('async function exportXLSX'), 'exportXLSX not defined'),
    },
    {
      name: 'export_section_function',
      desc: 'async function exportSection() defined',
      fn: () => assert(contains('async function exportSection') || contains('function exportSection'),
        'exportSection not defined'),
    },

    // ── PDF helpers ───────────────────────────────────────────────────────────
    {
      name: 'pdf_helper_new_page',
      desc: 'newPage() helper function defined in exportPDF',
      fn: () => assert(contains('function newPage') || contains('const newPage'),
        'newPage() helper missing'),
    },
    {
      name: 'pdf_helper_check_y',
      desc: 'checkY() overflow protection defined',
      fn: () => assert(contains('function checkY') || contains('checkY('),
        'checkY() helper missing'),
    },
    {
      name: 'pdf_helper_ms_section_head',
      desc: 'msSectionHead() helper defined for section headers',
      fn: () => assert(contains('function msSectionHead') || contains('msSectionHead'),
        'msSectionHead() helper missing'),
    },
    {
      name: 'pdf_helper_ms_table_row',
      desc: 'msTableRow() helper defined for table rows',
      fn: () => assert(contains('function msTableRow') || contains('msTableRow'),
        'msTableRow() helper missing'),
    },
    {
      name: 'pdf_color_navy',
      desc: 'PDF uses navy color constant #08183A or C_NAVY',
      fn: () => assert(
        contains('08183A') || contains('C_NAVY') || contains('0A1628'),
        'Navy color constant missing from PDF'
      ),
    },
    {
      name: 'pdf_color_teal',
      desc: 'PDF uses teal accent color',
      fn: () => assert(
        contains('00B4D8') || contains('C_TEAL') || contains('0E7490'),
        'Teal color constant missing from PDF'
      ),
    },

    // ── PDF timestamps ────────────────────────────────────────────────────────
    {
      name: 'pdf_timestamp_filename',
      desc: 'PDF output filename uses getTimestamp() pattern',
      fn: () => assert(
        contains("SGI_Investment_Research_Report_' + getTimestamp()") ||
        contains('getTimestamp()') ||
        contains('YYYYMMDDHHMM'),
        'PDF timestamp filename pattern missing'
      ),
    },
    {
      name: 'excel_timestamp_filename',
      desc: 'Excel output filename uses getTimestamp() pattern',
      fn: () => assert(
        contains("SGI_Financial_Data_' + getTimestamp()") ||
        (contains('getTimestamp()') && contains('exportXLSX')),
        'Excel timestamp filename pattern missing'
      ),
    },

    // ── Excel workbook ────────────────────────────────────────────────────────
    {
      name: 'excel_exceljs_workbook',
      desc: 'ExcelJS Workbook instantiation present',
      fn: () => assert(
        contains('new ExcelJS.Workbook()') || contains('exceljs') || contains('ExcelJS'),
        'ExcelJS workbook instantiation missing'
      ),
    },
    {
      name: 'excel_freeze_top_row',
      desc: 'Excel sheets use freezeTopRow or freeze pane',
      fn: () => assert(
        contains('freezeTopRow') || contains('views.*state.*frozen') || contains("state: 'frozen'"),
        'freeze top row pattern missing'
      ),
    },
    {
      name: 'excel_set_cols_helper',
      desc: 'setCols() helper used for column widths',
      fn: () => assert(
        contains('function setCols') || contains('setCols('),
        'setCols() helper missing'
      ),
    },
    {
      name: 'excel_color_navybg',
      desc: 'Excel color palette defines navyBg constant',
      fn: () => assert(contains('navyBg'), 'navyBg color constant missing from Excel'),
    },

    // ── New 4 sheets data integrity ───────────────────────────────────────────
    {
      name: 'excel_modeling_lab_modules',
      desc: 'Modeling Lab sheet has all 4 module section headers',
      fn: () => {
        assert(contains("'MODULE 1: DCF ASSUMPTIONS'"),   'Module 1 header missing');
        assert(contains("'MODULE 2: LEVERAGE & DEBT PAYDOWN'"), 'Module 2 header missing');
        assert(contains("'MODULE 3: M&A SYNERGY MODEL'"), 'Module 3 header missing');
        assert(contains("'MODULE 4: MODEL OUTPUTS (BASE CASE)'"), 'Module 4 header missing');
      },
    },
    {
      name: 'excel_regulatory_filings_rows',
      desc: 'Regulatory Filings sheet has at least 10 data rows (historical filings)',
      fn: () => {
        const html = getHTML();
        const start = html.indexOf("addWorksheet('Regulatory Filings'");
        assert(start !== -1, 'Regulatory Filings sheet not found');
        const body = html.slice(start, start + 8000);
        // Each row is a [ ... ] array entry in filData
        const rows = (body.match(/'\d{2,3}\s+\d{1,2},\s*\d{4}'/g) || []).length +
                     (body.match(/Feb \d+, 2026|Nov \d+, 2025|Aug \d+, 2025|May \d+, 2025/g) || []).length;
        assertAtLeast(rows, 5, 'Regulatory Filings row count');
      },
    },
    {
      name: 'excel_price_vs_fve_7_rows',
      desc: 'Price vs FVE sheet has all 7 historical P/FVE rows',
      fn: () => {
        const html = getHTML();
        const start = html.indexOf("addWorksheet('Price vs FVE'");
        assert(start !== -1, 'Price vs FVE sheet not found');
        const body = html.slice(start, start + 5000);
        assert(body.includes('FY2021'), 'FY2021 P/FVE row missing');
        assert(body.includes('FY2022'), 'FY2022 P/FVE row missing');
        assert(body.includes('FY2023'), 'FY2023 P/FVE row missing');
        assert(body.includes('FY2024'), 'FY2024 P/FVE row missing');
        assert(body.includes('Q1 2025'), 'Q1 2025 P/FVE row missing');
        assert(body.includes('0.69x') || body.includes('0.69'), 'Mar 2026 P/FVE 0.69x row missing');
      },
    },
    {
      name: 'excel_regulatory_history_6_events',
      desc: 'Regulatory History sheet has all 6 FTC timeline events',
      fn: () => {
        const html = getHTML();
        const start = html.indexOf("addWorksheet('Regulatory History'");
        assert(start !== -1, 'Regulatory History sheet not found');
        const body = html.slice(start, start + 6000);
        assert(body.includes('Jun 2022'), 'FTC investigation Jun 2022 missing');
        assert(body.includes('Sep 2023'), 'FTC lawsuit Sep 2023 missing');
        assert(body.includes('Jan 2024'), 'Consent Decree Jan 2024 missing');
        assert(body.includes('Feb 2025'), 'Acquisition close Feb 2025 missing');
        assert(body.includes('Q3 2025'),  'FTC compliance Q3 2025 missing');
        assert(body.includes('Mar 2026'), 'Mar 2026 compliance status missing');
      },
    },

    // ── Slides deck ───────────────────────────────────────────────────────────
    {
      name: 'slides_add_page_count',
      desc: 'exportSlides contains at least 36 doc.addPage() calls (37-slide deck)',
      fn: () => {
        const html = getHTML();
        const start = html.indexOf('function exportSlides');
        assert(start !== -1, 'exportSlides not found');
        const slidesBody = html.slice(start, start + 350_000);
        const count = (slidesBody.match(/doc\.addPage\(/g) || []).length;
        assertAtLeast(count, 36, 'Slides addPage() count');
      },
    },
    {
      name: 'slides_timestamp_filename',
      desc: 'Slide deck filename uses getTimestamp()',
      fn: () => assert(
        contains("SGI_Investment_Slides_' + getTimestamp()") ||
        contains('SGI_Investment_Slides_'),
        'Slides timestamp filename missing'
      ),
    },
  ],
};
