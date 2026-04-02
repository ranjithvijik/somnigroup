# SGI Dashboard — QA Report

> Generated: **2026-04-02 21:16 UTC**  |  Grade: **A+**  |  Pass Rate: **100.0%**

## 🟢 ALL TESTS PASSED

| Metric | Value |
|--------|-------|
| Total Tests | **170** |
| Passed      | ✅ 170 |
| Failed      | ✅ 0 |
| Pass Rate   | 100.0% `██████████████████████████████` |
| Duration    | ⏱️ 0.05s |
| Grade       | **A+** |

## 🧪 Test Modules

| Module | Description | Tests | Passed | Failed | Status |
|--------|-------------|-------|--------|--------|--------|
| `tests/unit/test_html_structure.js` | Structural integrity of index.html (tags, CDNs, UI elements) | 16 | 16 | 0 | ✅ |
| `tests/unit/test_section_coverage.js` | All 34 sections present in HTML, PDF export, and Excel export (39 sheets) | 82 | 82 | 0 | ✅ |
| `tests/unit/test_financial_values.js` | Canonical financial data correctness and stale value removal | 38 | 38 | 0 | ✅ |
| `tests/unit/test_export_functions.js` | PDF, Slides, and Excel export function integrity | 22 | 22 | 0 | ✅ |
| `tests/unit/test_live_data.js` | 5-tier live data fallback, price propagation, and static data integrity | 12 | 12 | 0 | ✅ |

## 📋 Detailed Test Results

### HTML Structure
**File:** `tests/unit/test_html_structure.js` &nbsp;|&nbsp; **Status:** ✅ PASSED &nbsp;|&nbsp; **16/16 tests passing**

<details>
<summary>Show all tests</summary>

| Test | Description | Status |
|------|-------------|--------|
| `single_body_tag` | Exactly one <body> tag | ✅ PASSED |
| `single_html_tag` | Exactly one <html> tag | ✅ PASSED |
| `no_console_log` | No console.log() calls in production code | ✅ PASSED |
| `no_recursive_safe_rrect` | safeRRect does not call itself recursively | ✅ PASSED |
| `chart_js_cdn` | Chart.js 4.4.0 CDN loaded | ✅ PASSED |
| `exceljs_cdn` | ExcelJS 4.4.0 CDN loaded | ✅ PASSED |
| `jspdf_cdn` | jsPDF CDN loaded | ✅ PASSED |
| `mathjax_cdn` | MathJax 3 CDN loaded | ✅ PASSED |
| `meta_viewport` | Responsive meta viewport tag present | ✅ PASSED |
| `theme_toggle_button` | Theme toggle button present | ✅ PASSED |
| `export_buttons_present` | All three export buttons present (Report, Slides, Excel) | ✅ PASSED |
| `sidebar_nav_present` | Left sidebar navigation present | ✅ PASSED |
| `file_size_bounds` | index.html is between 900 KB and 2 MB | ✅ PASSED |
| `doctype_present` | <!DOCTYPE html> declaration present | ✅ PASSED |
| `charset_utf8` | UTF-8 charset meta tag present | ✅ PASSED |
| `intersectionobserver_lazy` | IntersectionObserver used for lazy chart rendering | ✅ PASSED |

</details>

### Section Coverage
**File:** `tests/unit/test_section_coverage.js` &nbsp;|&nbsp; **Status:** ✅ PASSED &nbsp;|&nbsp; **82/82 tests passing**

<details>
<summary>Show all tests</summary>

| Test | Description | Status |
|------|-------------|--------|
| `html_section_exec_summary` | Section "exec-summary" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_company_overview` | Section "company-overview" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_industry_analysis` | Section "industry-analysis" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_financial_performance` | Section "financial-performance" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_segment_analysis` | Section "segment-analysis" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_balance_sheet` | Section "balance-sheet" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_valuation` | Section "valuation" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_catalysts_risks` | Section "catalysts-risks" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_technical_analysis` | Section "technical-analysis" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_peer_comparison` | Section "peer-comparison" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_comps_studio` | Section "comps-studio" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_analyst_consensus` | Section "analyst-consensus" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_investment_narrative` | Section "investment-narrative" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_quant_risk` | Section "quant-risk" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_advanced_valuation` | Section "advanced-valuation" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_ml_prediction` | Section "ml-prediction" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_deep_research` | Section "deep-research" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_dcf_analysis` | Section "dcf-analysis" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_modeling_lab` | Section "modeling-lab" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_regulatory_filings` | Section "regulatory-filings" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_esg_profile` | Section "esg-profile" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_institutional_ownership` | Section "institutional-ownership" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_management_team` | Section "management-team" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_analyst_notes` | Section "analyst-notes" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_price_vs_fve` | Section "price-vs-fve" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_rating_history` | Section "rating-history" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_longterm_valuation` | Section "longterm-valuation" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_dividend_history` | Section "dividend-history" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_forward_valuation` | Section "forward-valuation" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_synergy_tracker` | Section "synergy-tracker" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_industry_position` | Section "industry-position" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_regulatory_history` | Section "regulatory-history" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_macro_dashboard` | Section "macro-dashboard" present in HTML (data-target or id) | ✅ PASSED |
| `html_section_references` | Section "references" present in HTML (data-target or id) | ✅ PASSED |
| `section_count_34` | Exactly 34 unique data-target section IDs in sidebar nav | ✅ PASSED |
| `pdf_modeling_lab_page` | Modeling Lab page present in exportPDF (PAGE 36) | ✅ PASSED |
| `pdf_regulatory_history_page` | Regulatory History page present in exportPDF (PAGE 35) | ✅ PASSED |
| `pdf_signal_aggregation_page` | Signal Aggregation page present in exportPDF | ✅ PASSED |
| `pdf_advanced_valuation_page` | Advanced Valuation page present in exportPDF | ✅ PASSED |
| `pdf_newpage_count` | exportPDF contains at least 35 newPage() calls (35+ pages) | ✅ PASSED |
| `excel_sheet_income_statement` | Excel sheet "Income Statement" present in exportXLSX | ✅ PASSED |
| `excel_sheet_balance_sheet` | Excel sheet "Balance Sheet" present in exportXLSX | ✅ PASSED |
| `excel_sheet_cash_flow` | Excel sheet "Cash Flow" present in exportXLSX | ✅ PASSED |
| `excel_sheet_quarterly` | Excel sheet "Quarterly" present in exportXLSX | ✅ PASSED |
| `excel_sheet_ratios` | Excel sheet "Ratios" present in exportXLSX | ✅ PASSED |
| `excel_sheet_segments` | Excel sheet "Segments" present in exportXLSX | ✅ PASSED |
| `excel_sheet_estimates` | Excel sheet "Estimates" present in exportXLSX | ✅ PASSED |
| `excel_sheet_peer_comparison` | Excel sheet "Peer Comparison" present in exportXLSX | ✅ PASSED |
| `excel_sheet_valuation` | Excel sheet "Valuation" present in exportXLSX | ✅ PASSED |
| `excel_sheet_sentiment_analysis` | Excel sheet "Sentiment Analysis" present in exportXLSX | ✅ PASSED |
| `excel_sheet_ml_analysis` | Excel sheet "ML Analysis" present in exportXLSX | ✅ PASSED |
| `excel_sheet_topic_frequency` | Excel sheet "Topic Frequency" present in exportXLSX | ✅ PASSED |
| `excel_sheet_chart___revenue___ebitda` | Excel sheet "Chart - Revenue & EBITDA" present in exportXLSX | ✅ PASSED |
| `excel_sheet_chart___eps_trend` | Excel sheet "Chart - EPS Trend" present in exportXLSX | ✅ PASSED |
| `excel_sheet_chart___cash_flow` | Excel sheet "Chart - Cash Flow" present in exportXLSX | ✅ PASSED |
| `excel_sheet_chart___valuation` | Excel sheet "Chart - Valuation" present in exportXLSX | ✅ PASSED |
| `excel_sheet_chart___topics` | Excel sheet "Chart - Topics" present in exportXLSX | ✅ PASSED |
| `excel_sheet_technical_analysis` | Excel sheet "Technical Analysis" present in exportXLSX | ✅ PASSED |
| `excel_sheet_macro_dashboard` | Excel sheet "Macro Dashboard" present in exportXLSX | ✅ PASSED |
| `excel_sheet_references` | Excel sheet "References" present in exportXLSX | ✅ PASSED |
| `excel_sheet_dcf_analysis` | Excel sheet "DCF Analysis" present in exportXLSX | ✅ PASSED |
| `excel_sheet_trading_comps` | Excel sheet "Trading Comps" present in exportXLSX | ✅ PASSED |
| `excel_sheet_operating_kpis` | Excel sheet "Operating KPIs" present in exportXLSX | ✅ PASSED |
| `excel_sheet_esg_profile` | Excel sheet "ESG Profile" present in exportXLSX | ✅ PASSED |
| `excel_sheet_institutional_ownership` | Excel sheet "Institutional Ownership" present in exportXLSX | ✅ PASSED |
| `excel_sheet_synergy_tracker` | Excel sheet "Synergy Tracker" present in exportXLSX | ✅ PASSED |
| `excel_sheet_dividend_history` | Excel sheet "Dividend History" present in exportXLSX | ✅ PASSED |
| `excel_sheet_forward_valuation` | Excel sheet "Forward Valuation" present in exportXLSX | ✅ PASSED |
| `excel_sheet_management_team` | Excel sheet "Management Team" present in exportXLSX | ✅ PASSED |
| `excel_sheet_rating_history` | Excel sheet "Rating History" present in exportXLSX | ✅ PASSED |
| `excel_sheet_10_year_history` | Excel sheet "10-Year History" present in exportXLSX | ✅ PASSED |
| `excel_sheet_industry_position` | Excel sheet "Industry Position" present in exportXLSX | ✅ PASSED |
| `excel_sheet_catalysts___risks` | Excel sheet "Catalysts & Risks" present in exportXLSX | ✅ PASSED |
| `excel_sheet_investment_case` | Excel sheet "Investment Case" present in exportXLSX | ✅ PASSED |
| `excel_sheet_analyst_notes` | Excel sheet "Analyst Notes" present in exportXLSX | ✅ PASSED |
| `excel_sheet_modeling_lab` | Excel sheet "Modeling Lab" present in exportXLSX | ✅ PASSED |
| `excel_sheet_regulatory_filings` | Excel sheet "Regulatory Filings" present in exportXLSX | ✅ PASSED |
| `excel_sheet_price_vs_fve` | Excel sheet "Price vs FVE" present in exportXLSX | ✅ PASSED |
| `excel_sheet_regulatory_history` | Excel sheet "Regulatory History" present in exportXLSX | ✅ PASSED |
| `excel_sheet_total_39` | exportXLSX creates exactly 39 worksheets | ✅ PASSED |
| `slides_export_function` | exportSlides function present | ✅ PASSED |
| `slides_dcf_and_regulatory_slides` | Slides deck covers DCF Analysis (Slide 25) and Regulatory Filings (Slide 27) | ✅ PASSED |

</details>

### Financial Values
**File:** `tests/unit/test_financial_values.js` &nbsp;|&nbsp; **Status:** ✅ PASSED &nbsp;|&nbsp; **38/38 tests passing**

<details>
<summary>Show all tests</summary>

| Test | Description | Status |
|------|-------------|--------|
| `total_assets_18450` | Total Assets = $18,450M (post-acquisition) | ✅ PASSED |
| `total_equity_3600` | Equity = $3,600M | ✅ PASSED |
| `net_debt_8130` | Net Debt = $8,130M | ✅ PASSED |
| `no_stale_assets_17250` | Stale Total Assets $17,250M removed | ✅ PASSED |
| `no_stale_equity_3580` | Stale Equity $3,580M removed | ✅ PASSED |
| `no_stale_equity_1760` | Stale Equity $1,760M removed | ✅ PASSED |
| `fy2025_revenue_7476` | FY2025 Revenue = $7,476.5M (post-acquisition) | ✅ PASSED |
| `da_320m` | D&A = $320.0M | ✅ PASSED |
| `interest_expense_502m` | Interest Expense = $502.0M | ✅ PASSED |
| `no_stale_da_265` | Stale D&A $265.1M removed | ✅ PASSED |
| `no_stale_interest_620` | Stale Interest Expense "$620M" removed (specific string) | ✅ PASSED |
| `shares_208_8m` | Shares = 208.8M | ✅ PASSED |
| `no_stale_shares_214` | Stale shares 214M removed | ✅ PASSED |
| `current_price_69_37` | Current price = $69.37 | ✅ PASSED |
| `dcf_fve_100` | DCF Fair Value Estimate = $100/share | ✅ PASSED |
| `upside_44_1` | Implied upside = +44.1% | ✅ PASSED |
| `wacc_8_0` | WACC base case = 8.0% | ✅ PASSED |
| `rf_rate_4_30` | Risk-free rate = 4.30% (10-Yr Treasury) | ✅ PASSED |
| `beta_1_42` | Beta = 1.42 | ✅ PASSED |
| `erp_5_5` | Equity Risk Premium = 5.5% | ✅ PASSED |
| `no_stale_sofr_5_30` | SOFR 5.30% as primary rate removed (one contextual mention allowed) | ✅ PASSED |
| `fed_funds_4_35` | Fed Funds rate = 4.35% | ✅ PASSED |
| `leverage_7_81x` | Net Debt/EBITDA leverage = 7.81x | ✅ PASSED |
| `icr_2_07x` | Interest Coverage Ratio = 2.07x | ✅ PASSED |
| `piotroski_7_9` | Piotroski F-Score = 7/9 | ✅ PASSED |
| `altman_z_0_80` | Altman Z' = 0.80 (Distress zone, corrected from 1.93) | ✅ PASSED |
| `no_stale_altman_1_93` | Stale Altman Z-score 1.93 removed from Altman Z context | ✅ PASSED |
| `dcf_nopat_formula` | DCF uses NOPAT method (EBIT × (1-T)), not EBITDA(1-T) | ✅ PASSED |
| `bessel_correction` | Bessel correction (n-1 denominator) used in volatility calculation | ✅ PASSED |
| `synergies_225m_total` | Total synergy target = $225M | ✅ PASSED |
| `synergies_80m_realized` | $80M synergies realized | ✅ PASSED |
| `modeling_lab_dcf_revgrowth` | Modeling Lab: Revenue Growth default = 6.4% | ✅ PASSED |
| `modeling_lab_ebitda_margin` | Modeling Lab: EBITDA Margin default = 18.6% | ✅ PASSED |
| `modeling_lab_wacc_8_5` | Modeling Lab: WACC slider default = 8.5% | ✅ PASSED |
| `pfve_fy2021_1_35x` | Price vs FVE: FY2021 P/FVE = 1.35x (Overvalued) | ✅ PASSED |
| `pfve_mar2026_0_69x` | Price vs FVE: Mar 2026 P/FVE = 0.69x (Undervalued -31%) | ✅ PASSED |
| `fy2024_revenue_4930_9` | FY2024 revenue = $4,930.9M (harmonized) | ✅ PASSED |
| `fy2023_revenue_4925_4` | FY2023 revenue = $4,925.4M (harmonized) | ✅ PASSED |

</details>

### Export Functions
**File:** `tests/unit/test_export_functions.js` &nbsp;|&nbsp; **Status:** ✅ PASSED &nbsp;|&nbsp; **22/22 tests passing**

<details>
<summary>Show all tests</summary>

| Test | Description | Status |
|------|-------------|--------|
| `export_pdf_function` | async function exportPDF() defined | ✅ PASSED |
| `export_slides_function` | function exportSlides() defined | ✅ PASSED |
| `export_xlsx_function` | async function exportXLSX() defined | ✅ PASSED |
| `export_section_function` | async function exportSection() defined | ✅ PASSED |
| `pdf_helper_new_page` | newPage() helper function defined in exportPDF | ✅ PASSED |
| `pdf_helper_check_y` | checkY() overflow protection defined | ✅ PASSED |
| `pdf_helper_ms_section_head` | msSectionHead() helper defined for section headers | ✅ PASSED |
| `pdf_helper_ms_table_row` | msTableRow() helper defined for table rows | ✅ PASSED |
| `pdf_color_navy` | PDF uses navy color constant #08183A or C_NAVY | ✅ PASSED |
| `pdf_color_teal` | PDF uses teal accent color | ✅ PASSED |
| `pdf_timestamp_filename` | PDF output filename uses getTimestamp() pattern | ✅ PASSED |
| `excel_timestamp_filename` | Excel output filename uses getTimestamp() pattern | ✅ PASSED |
| `excel_exceljs_workbook` | ExcelJS Workbook instantiation present | ✅ PASSED |
| `excel_freeze_top_row` | Excel sheets use freezeTopRow or freeze pane | ✅ PASSED |
| `excel_set_cols_helper` | setCols() helper used for column widths | ✅ PASSED |
| `excel_color_navybg` | Excel color palette defines navyBg constant | ✅ PASSED |
| `excel_modeling_lab_modules` | Modeling Lab sheet has all 4 module section headers | ✅ PASSED |
| `excel_regulatory_filings_rows` | Regulatory Filings sheet has at least 10 data rows (historical filings) | ✅ PASSED |
| `excel_price_vs_fve_7_rows` | Price vs FVE sheet has all 7 historical P/FVE rows | ✅ PASSED |
| `excel_regulatory_history_6_events` | Regulatory History sheet has all 6 FTC timeline events | ✅ PASSED |
| `slides_add_page_count` | exportSlides contains at least 36 doc.addPage() calls (37-slide deck) | ✅ PASSED |
| `slides_timestamp_filename` | Slide deck filename uses getTimestamp() | ✅ PASSED |

</details>

### Live Data Architecture
**File:** `tests/unit/test_live_data.js` &nbsp;|&nbsp; **Status:** ✅ PASSED &nbsp;|&nbsp; **12/12 tests passing**

<details>
<summary>Show all tests</summary>

| Test | Description | Status |
|------|-------------|--------|
| `tier1_python_backend` | Tier 1: Python backend (localhost:5001) referenced | ✅ PASSED |
| `tier2_yahoo_cors` | Tier 2: Yahoo Finance CORS proxy referenced | ✅ PASSED |
| `tier3_alpha_vantage` | Tier 3: Alpha Vantage API referenced | ✅ PASSED |
| `tier4_session_cache` | Tier 4: Session cache for last successful fetch | ✅ PASSED |
| `tier5_static_fallback` | Tier 5: Static hardcoded fallback data present | ✅ PASSED |
| `propagate_live_price` | propagateLivePrice() function cascades price across the dashboard | ✅ PASSED |
| `ticker_sgi_present` | Ticker symbol SGI referenced in live data logic | ✅ PASSED |
| `no_stale_sofr` | SOFR 5.30% not used as primary rate (one contextual mention allowed) | ✅ PASSED |
| `get_timestamp_function` | getTimestamp() helper for YYYYMMDDHHMM filename suffixes | ✅ PASSED |
| `scroll_to_section_function` | scrollToSection() navigation function present | ✅ PASSED |
| `intersection_observer_lazy_charts` | Charts lazy-loaded via IntersectionObserver | ✅ PASSED |
| `mobile_hamburger_menu` | Mobile hamburger menu present (responsive) | ✅ PASSED |

</details>

## 🚀 Running the Tests

### Quick start
```bash
npm install
node run_tests.js
```

### Options
```bash
node run_tests.js --fast                   # skip live-data tests
node run_tests.js --module financial_values # run only that module
node run_tests.js --out my_qa.md            # custom output path
node run_tests.js --no-report              # run without writing file
```

### Makefile shortcuts
```bash
make qa              # full suite + QA-REPORT.md
make test            # verbose run
make fast            # skip live-data
make t-html          # HTML structure only
make t-data          # financial values only
make t-exports       # export functions only
make t-sections      # section coverage only
make clean           # remove QA-REPORT.md
```

## 🏗️ Test Architecture

```
tests/
├── helpers.js                         # Shared utilities (getHTML, assert, etc.)
│
└── unit/
    ├── test_html_structure.js         # Single body/html tag, CDNs, no console.log,
    │                                  # no recursive safeRRect, file size bounds
    ├── test_section_coverage.js       # All 34 sections in HTML + PDF (39 pages)
    │                                  # + Excel (39 sheets) + Slides
    ├── test_financial_values.js       # Canonical corrected values present,
    │                                  # stale values removed (Altman Z, DuPont,
    │                                  # assets, equity, rates, formulas)
    ├── test_export_functions.js       # exportPDF/Slides/XLSX functions, helpers,
    │                                  # color constants, 4 new sheet data rows
    └── test_live_data.js              # 5-tier fallback, propagateLivePrice,
                                       # CORS proxies, static fallback
```

All tests run **fully offline** — no network calls, no browser, no server.
Tests parse `index.html` directly as a text file using Node.js `fs`.

---
*Generated by `run_tests.js` · 2026-04-02 21:16 UTC*
