/**
 * test_financial_values.js
 * ────────────────────────
 * Validates that all corrected canonical financial values are present
 * in index.html and that stale/incorrect values have been removed.
 *
 * Canonical values come from the Milestone 2 audit (commit 2d393bc)
 * and Milestone 4 gap-fill (commit 7c33b37).
 */

'use strict';

const { getHTML, contains, countOccurrences, assert, assertEqual } = require('../helpers');

module.exports = {
  name: 'Financial Values',
  description: 'Canonical financial data correctness and stale value removal',

  tests: [
    // ── Balance Sheet ──────────────────────────────────────────────────────────
    {
      name: 'total_assets_18450',
      desc: 'Total Assets = $18,450M (post-acquisition)',
      fn: () => assert(contains('18,450'), 'Total Assets $18,450M missing'),
    },
    {
      name: 'total_equity_3600',
      desc: 'Equity = $3,600M',
      fn: () => assert(contains('3,600'), 'Equity $3,600M missing'),
    },
    {
      name: 'net_debt_8130',
      desc: 'Net Debt = $8,130M',
      fn: () => assert(contains('8,130'), 'Net Debt $8,130M missing'),
    },
    {
      name: 'no_stale_assets_17250',
      desc: 'Stale Total Assets $17,250M removed',
      fn: () => assertEqual(countOccurrences('17,250'), 0, 'Stale $17,250M occurrences'),
    },
    {
      name: 'no_stale_equity_3580',
      desc: 'Stale Equity $3,580M removed',
      fn: () => assertEqual(countOccurrences('3,580'), 0, 'Stale $3,580M occurrences'),
    },
    {
      name: 'no_stale_equity_1760',
      desc: 'Stale Equity $1,760M removed',
      fn: () => assertEqual(countOccurrences('1,760'), 0, 'Stale $1,760M occurrences'),
    },

    // ── P&L ───────────────────────────────────────────────────────────────────
    {
      name: 'fy2025_revenue_7476',
      desc: 'FY2025 Revenue = $7,476.5M (post-acquisition)',
      fn: () => assert(contains('7,476') || contains('7476'), 'FY2025 Revenue $7,476M missing'),
    },
    {
      name: 'da_320m',
      desc: 'D&A = $320.0M',
      fn: () => assert(contains('320.0') || contains('$320'), 'D&A $320M missing'),
    },
    {
      name: 'interest_expense_502m',
      desc: 'Interest Expense = $502.0M',
      fn: () => assert(contains('502'), 'Interest Expense $502M missing'),
    },
    {
      name: 'no_stale_da_265',
      desc: 'Stale D&A $265.1M removed',
      fn: () => assertEqual(countOccurrences('265.1'), 0, 'Stale D&A $265.1M occurrences'),
    },
    {
      name: 'no_stale_interest_620',
      desc: 'Stale Interest Expense "$620M" removed (specific string)',
      fn: () => {
        // The literal "$620M" as an interest expense value should be gone.
        // Note: "620" alone appears in other legitimate data (e.g. current liabilities 1,620).
        assertEqual(
          countOccurrences('interest.*620') + countOccurrences('620M.*interest') +
          countOccurrences('\$620M'),
          0, 'Stale $620M interest expense occurrences'
        );
      },
    },

    // ── Per-Share Metrics ──────────────────────────────────────────────────────
    {
      name: 'shares_208_8m',
      desc: 'Shares = 208.8M',
      fn: () => assert(contains('208.8'), 'Shares 208.8M missing'),
    },
    {
      name: 'no_stale_shares_214',
      desc: 'Stale shares 214M removed',
      fn: () => assertEqual(countOccurrences('214M') + countOccurrences('214.0M'), 0,
        'Stale 214M shares occurrences'),
    },
    {
      name: 'current_price_69_37',
      desc: 'Current price = $69.37',
      fn: () => assert(contains('69.37'), 'Current price $69.37 missing'),
    },
    {
      name: 'dcf_fve_100',
      desc: 'DCF Fair Value Estimate = $100/share',
      fn: () => assert(contains('100/share') || contains('$100'), 'DCF FVE $100 missing'),
    },
    {
      name: 'upside_44_1',
      desc: 'Implied upside = +44.1%',
      fn: () => assert(contains('44.1'), 'Upside +44.1% missing'),
    },

    // ── WACC & Cost of Capital ─────────────────────────────────────────────────
    {
      name: 'wacc_8_0',
      desc: 'WACC base case = 8.0%',
      fn: () => assert(contains('8.0%') || contains('WACC.*8'), 'WACC 8.0% missing'),
    },
    {
      name: 'rf_rate_4_30',
      desc: 'Risk-free rate = 4.30% (10-Yr Treasury)',
      fn: () => assert(contains('4.30'), 'Rf 4.30% missing'),
    },
    {
      name: 'beta_1_42',
      desc: 'Beta = 1.42',
      fn: () => assert(contains('1.42'), 'Beta 1.42 missing'),
    },
    {
      name: 'erp_5_5',
      desc: 'Equity Risk Premium = 5.5%',
      fn: () => assert(contains('5.5%') || contains("5.50%"), 'ERP 5.5% missing'),
    },
    {
      name: 'no_stale_sofr_5_30',
      desc: 'SOFR 5.30% as primary rate removed (one contextual mention allowed)',
      fn: () => {
        // SOFR may appear once in a risk-factor paragraph explaining floating-rate debt.
        // It must NOT appear as the primary rate assumption (replaced by Fed Funds 4.35%).
        const n = countOccurrences('SOFR');
        assert(n <= 1, `SOFR appears ${n} times — expected 0 or 1 contextual mention`);
        assert(!contains('SOFR.*5.30') && !contains('5.30.*SOFR'),
          'Stale SOFR 5.30% primary rate still present');
      },
    },
    {
      name: 'fed_funds_4_35',
      desc: 'Fed Funds rate = 4.35%',
      fn: () => assert(contains('4.35'), 'Fed Funds 4.35% missing'),
    },

    // ── Leverage & Coverage ───────────────────────────────────────────────────
    {
      name: 'leverage_7_81x',
      desc: 'Net Debt/EBITDA leverage = 7.81x',
      fn: () => assert(contains('7.81'), 'Leverage 7.81x missing'),
    },
    {
      name: 'icr_2_07x',
      desc: 'Interest Coverage Ratio = 2.07x',
      fn: () => assert(contains('2.07'), 'ICR 2.07x missing'),
    },

    // ── Scoring Models ────────────────────────────────────────────────────────
    {
      name: 'piotroski_7_9',
      desc: 'Piotroski F-Score = 7/9',
      fn: () => assert(contains('7/9'), 'Piotroski 7/9 missing'),
    },
    {
      name: 'altman_z_0_80',
      desc: 'Altman Z\' = 0.80 (Distress zone, corrected from 1.93)',
      fn: () => assert(contains('0.80') || contains('0.8'), 'Altman Z 0.80 missing'),
    },
    {
      name: 'no_stale_altman_1_93',
      desc: "Stale Altman Z-score 1.93 removed from Altman Z context",
      fn: () => {
        // '1.93' appears as Current Ratio in the Ratios table (legitimate).
        // Verify it does NOT appear adjacent to Altman Z context.
        assert(
          !contains('Altman.*1.93') && !contains('1.93.*Altman') &&
          !contains('Z.*Score.*1.93') && !contains("Z'.*1.93"),
          "Stale Altman Z' value 1.93 still paired with Altman Z context"
        );
      },
    },

    // ── DCF Formula ───────────────────────────────────────────────────────────
    {
      name: 'dcf_nopat_formula',
      desc: 'DCF uses NOPAT method (EBIT × (1-T)), not EBITDA(1-T)',
      fn: () => assert(contains('NOPAT') || contains('1-T') || contains('1 - T'),
        'NOPAT/EBIT(1-T) formula missing'),
    },
    {
      name: 'bessel_correction',
      desc: 'Bessel correction (n-1 denominator) used in volatility calculation',
      fn: () => assert(
        contains('n-1') || contains('n - 1') || contains('length - 1'),
        'Bessel correction (n-1) missing'
      ),
    },

    // ── Synergies ─────────────────────────────────────────────────────────────
    {
      name: 'synergies_225m_total',
      desc: 'Total synergy target = $225M',
      fn: () => assert(contains('225M') || contains('$225'), '$225M total synergies missing'),
    },
    {
      name: 'synergies_80m_realized',
      desc: '$80M synergies realized',
      fn: () => assert(contains('80M realized') || contains('$80M realized') || contains('80M'),
        '$80M realized synergies missing'),
    },

    // ── Modeling Lab data ──────────────────────────────────────────────────────
    {
      name: 'modeling_lab_dcf_revgrowth',
      desc: 'Modeling Lab: Revenue Growth default = 6.4%',
      fn: () => assert(contains('6.4'), 'Modeling Lab revenue growth 6.4% missing'),
    },
    {
      name: 'modeling_lab_ebitda_margin',
      desc: 'Modeling Lab: EBITDA Margin default = 18.6%',
      fn: () => assert(contains('18.6'), 'Modeling Lab EBITDA margin 18.6% missing'),
    },
    {
      name: 'modeling_lab_wacc_8_5',
      desc: 'Modeling Lab: WACC slider default = 8.5%',
      fn: () => assert(contains('8.5'), 'Modeling Lab WACC 8.5% missing'),
    },

    // ── Price vs FVE ──────────────────────────────────────────────────────────
    {
      name: 'pfve_fy2021_1_35x',
      desc: 'Price vs FVE: FY2021 P/FVE = 1.35x (Overvalued)',
      fn: () => assert(contains('1.35x') || contains('1.35'), 'FY2021 P/FVE 1.35x missing'),
    },
    {
      name: 'pfve_mar2026_0_69x',
      desc: 'Price vs FVE: Mar 2026 P/FVE = 0.69x (Undervalued -31%)',
      fn: () => assert(contains('0.69x') || contains('0.69'), 'Mar 2026 P/FVE 0.69x missing'),
    },

    // ── Revenue arrays consistency ────────────────────────────────────────────
    {
      name: 'fy2024_revenue_4930_9',
      desc: 'FY2024 revenue = $4,930.9M (harmonized)',
      fn: () => assert(contains('4930.9') || contains('4,930.9'), 'FY2024 revenue $4,930.9M missing'),
    },
    {
      name: 'fy2023_revenue_4925_4',
      desc: 'FY2023 revenue = $4,925.4M (harmonized)',
      fn: () => assert(contains('4925.4') || contains('4,925.4'), 'FY2023 revenue $4,925.4M missing'),
    },
  ],
};
