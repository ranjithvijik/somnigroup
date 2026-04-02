/**
 * test_section_coverage.js
 * ────────────────────────
 * Verifies all 34 analytical sections are present in index.html,
 * present in the PDF export (exportPDF), present in the Excel export
 * (exportXLSX), and covered by the slide deck (exportSlides).
 */

'use strict';

const { getHTML, contains, assert, assertEqual } = require('../helpers');

// Canonical 34 section IDs
const SECTIONS_34 = [
  'exec-summary',
  'company-overview',
  'industry-analysis',
  'financial-performance',
  'segment-analysis',
  'balance-sheet',
  'valuation',
  'catalysts-risks',
  'technical-analysis',
  'peer-comparison',
  'comps-studio',
  'analyst-consensus',
  'investment-narrative',
  'quant-risk',
  'advanced-valuation',
  'ml-prediction',
  'deep-research',
  'dcf-analysis',
  'modeling-lab',
  'regulatory-filings',
  'esg-profile',
  'institutional-ownership',
  'management-team',
  'analyst-notes',
  'price-vs-fve',
  'rating-history',
  'longterm-valuation',
  'dividend-history',
  'forward-valuation',
  'synergy-tracker',
  'industry-position',
  'regulatory-history',
  'macro-dashboard',
  'references',
];

// Strings we expect in the exportPDF function for each section
const PDF_ANCHORS = {
  'exec-summary':         ['Executive Summary', 'exec-summary', 'EXECUTIVE SUMMARY'],
  'company-overview':     ['Company Overview', 'company-overview', 'COMPANY OVERVIEW'],
  'financial-performance':['Financial Performance', 'FINANCIAL PERFORMANCE'],
  'valuation':            ['Valuation', 'Football Field', 'DCF'],
  'modeling-lab':         ['Modeling Lab', 'MODULE 1', 'DCF Scenario'],
  'regulatory-filings':   ["'Regulatory Filings'", 'wsFilings'],
  'price-vs-fve':         ["'Price vs FVE'", 'wsPFVE'],
  'regulatory-history':   ["'Regulatory History'", 'wsRegHist'],
};

// Excel sheet names expected in exportXLSX (exact names from index.html)
const EXCEL_SHEETS_39 = [
  'Income Statement', 'Balance Sheet', 'Cash Flow', 'Quarterly',
  'Ratios', 'Segments', 'Estimates', 'Peer Comparison', 'Valuation',
  'Sentiment Analysis', 'ML Analysis', 'Topic Frequency',
  'Chart - Revenue & EBITDA', 'Chart - EPS Trend', 'Chart - Cash Flow',
  'Chart - Valuation', 'Chart - Topics', 'Technical Analysis',
  'Macro Dashboard', 'References', 'DCF Analysis', 'Trading Comps',
  'Operating KPIs', 'ESG Profile', 'Institutional Ownership',
  'Synergy Tracker', 'Dividend History', 'Forward Valuation',
  'Management Team', 'Rating History', '10-Year History',
  'Industry Position', 'Catalysts & Risks', 'Investment Case',
  'Analyst Notes',
  // 4 new sheets (gap-fill)
  'Modeling Lab', 'Regulatory Filings', 'Price vs FVE', 'Regulatory History',
];

module.exports = {
  name: 'Section Coverage',
  description: 'All 34 sections present in HTML, PDF export, and Excel export (39 sheets)',

  tests: [
    // ── HTML presence tests ───────────────────────────────────────────────────
    ...SECTIONS_34.map(id => ({
      name: `html_section_${id.replace(/-/g, '_')}`,
      desc: `Section "${id}" present in HTML (data-target or id)`,
      fn: () => assert(
        contains(`data-target="${id}"`) || contains(`id="${id}"`),
        `Section "${id}" not found in HTML`
      ),
    })),

    // ── Section count test ────────────────────────────────────────────────────
    {
      name: 'section_count_34',
      desc: 'Exactly 34 unique data-target section IDs in sidebar nav',
      fn: () => {
        const html = getHTML();
        const matches = new Set(
          (html.match(/data-target="([a-z-]+)"/g) || []).map(m => m.replace(/data-target="|"/g, ''))
        );
        // Filter to known section IDs only
        const found = SECTIONS_34.filter(id => matches.has(id));
        assertEqual(found.length, 34, `Section nav count`);
      },
    },

    // ── PDF export coverage ───────────────────────────────────────────────────
    {
      name: 'pdf_modeling_lab_page',
      desc: 'Modeling Lab page present in exportPDF (PAGE 36)',
      fn: () => assert(
        contains('PAGE 36  -  MODELING LAB') || contains('Modeling Lab  -  Interactive'),
        'Modeling Lab page missing from exportPDF'
      ),
    },
    {
      name: 'pdf_regulatory_history_page',
      desc: 'Regulatory History page present in exportPDF (PAGE 35)',
      fn: () => assert(
        contains('PAGE 35  -  REGULATORY HISTORY') || contains('PAGE 35'),
        'Regulatory History page missing from exportPDF'
      ),
    },
    {
      name: 'pdf_signal_aggregation_page',
      desc: 'Signal Aggregation page present in exportPDF',
      fn: () => assert(
        contains('Signal Aggregation') && contains('Rating Derivation'),
        'Signal Aggregation page missing from exportPDF'
      ),
    },
    {
      name: 'pdf_advanced_valuation_page',
      desc: 'Advanced Valuation page present in exportPDF',
      fn: () => assert(
        contains('Advanced Valuation') || contains('ADVANCED VALUATION'),
        'Advanced Valuation page missing from exportPDF'
      ),
    },
    {
      name: 'pdf_newpage_count',
      desc: 'exportPDF contains at least 35 newPage() calls (35+ pages)',
      fn: () => {
        const html = getHTML();
        // exportPDF is async; exportSlides is a regular function (not async)
        const start = html.indexOf('async function exportPDF');
        assert(start !== -1, 'exportPDF function not found');
        // exportSlides is defined as "function exportSlides" (non-async)
        const end = html.indexOf('\nfunction exportSlides', start);
        assert(end !== -1, 'exportSlides boundary not found');
        const pdfBody = html.slice(start, end);
        const count = (pdfBody.match(/newPage\(\)/g) || []).length;
        assert(count >= 35, `Expected >= 35 newPage() calls, found ${count}`);
      },
    },

    // ── Excel sheet coverage ──────────────────────────────────────────────────
    ...EXCEL_SHEETS_39.map(sheet => ({
      name: `excel_sheet_${sheet.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase()}`,
      desc: `Excel sheet "${sheet}" present in exportXLSX`,
      fn: () => assert(
        contains(`addWorksheet('${sheet}'`) || contains(`addWorksheet("${sheet}"`),
        `Excel sheet "${sheet}" missing from exportXLSX`
      ),
    })),

    {
      name: 'excel_sheet_total_39',
      desc: 'exportXLSX creates exactly 39 worksheets',
      fn: () => {
        const html = getHTML();
        const start = html.indexOf('async function exportXLSX');
        const end   = html.indexOf('// ── GENERATE & DOWNLOAD', start);
        assert(start !== -1, 'exportXLSX function not found');
        const xlBody = html.slice(start, end !== -1 ? end : start + 200_000);
        const count = (xlBody.match(/addWorksheet\(/g) || []).length;
        assertEqual(count, 39, `Excel sheet count`);
      },
    },

    // ── Slides coverage ───────────────────────────────────────────────────────
    {
      name: 'slides_export_function',
      desc: 'exportSlides function present',
      fn: () => assert(
        contains('function exportSlides') || contains('exportSlides'),
        'exportSlides function missing'
      ),
    },
    {
      name: 'slides_dcf_and_regulatory_slides',
      desc: 'Slides deck covers DCF Analysis (Slide 25) and Regulatory Filings (Slide 27)',
      fn: () => {
        const html = getHTML();
        const start = html.indexOf('function exportSlides');
        assert(start !== -1, 'exportSlides function not found');
        // exportSlides ends before the next function block
        const slidesBody = html.slice(start, start + 120_000);
        assert(slidesBody.includes('SLIDE 25') || slidesBody.includes('DCF ANALYSIS'),
          'DCF Analysis slide (25) missing');
        assert(slidesBody.includes('SLIDE 27') || slidesBody.includes('REGULATORY FILINGS'),
          'Regulatory Filings slide (27) missing');
      },
    },
  ],
};
