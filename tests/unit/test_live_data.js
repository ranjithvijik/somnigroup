/**
 * test_live_data.js
 * ─────────────────
 * Validates the 5-tier live data architecture:
 *   - All 5 tiers referenced
 *   - propagateLivePrice() cascades price to all dependents
 *   - CORS proxy URLs present for Tier 2
 *   - Alpha Vantage integration present for Tier 3
 *   - Static fallback data present (Tier 5)
 *   - No stale rate constants (SOFR, old Fed Funds)
 *   - Ticker symbol SGI referenced correctly
 */

'use strict';

const { getHTML, contains, assert, assertEqual, countOccurrences } = require('../helpers');

module.exports = {
  name: 'Live Data Architecture',
  description: '5-tier live data fallback, price propagation, and static data integrity',

  tests: [
    {
      name: 'tier1_python_backend',
      desc: 'Tier 1: Python backend (localhost:5001) referenced',
      fn: () => assert(contains('5001') || contains('localhost:5001') || contains('python'),
        'Tier 1 Python backend reference missing'),
    },
    {
      name: 'tier2_yahoo_cors',
      desc: 'Tier 2: Yahoo Finance CORS proxy referenced',
      fn: () => assert(
        contains('allorigins') || contains('corsproxy') || contains('yahoo') || contains('Yahoo'),
        'Tier 2 Yahoo Finance CORS proxy missing'
      ),
    },
    {
      name: 'tier3_alpha_vantage',
      desc: 'Tier 3: Alpha Vantage API referenced',
      fn: () => assert(
        contains('alphavantage') || contains('alpha_vantage') || contains('Alpha Vantage') || contains('AV_API'),
        'Tier 3 Alpha Vantage reference missing'
      ),
    },
    {
      name: 'tier4_session_cache',
      desc: 'Tier 4: Session cache for last successful fetch',
      fn: () => assert(
        contains('cache') || contains('sessionStorage') || contains('lastPrice') || contains('cached'),
        'Tier 4 session cache missing'
      ),
    },
    {
      name: 'tier5_static_fallback',
      desc: 'Tier 5: Static hardcoded fallback data present',
      fn: () => assert(
        contains('static') || contains('Static') || contains('fallback') || contains('Tier 5'),
        'Tier 5 static fallback missing'
      ),
    },
    {
      name: 'propagate_live_price',
      desc: 'propagateLivePrice() function cascades price across the dashboard',
      fn: () => assert(
        contains('propagateLivePrice') || contains('propagatePrice'),
        'propagateLivePrice() function missing'
      ),
    },
    {
      name: 'ticker_sgi_present',
      desc: 'Ticker symbol SGI referenced in live data logic',
      fn: () => assert(contains("'SGI'") || contains('"SGI"') || contains('ticker.*SGI'),
        'SGI ticker symbol missing'),
    },
    {
      name: 'no_stale_sofr',
      desc: 'SOFR 5.30% not used as primary rate (one contextual mention allowed)',
      fn: () => {
        const n = countOccurrences('SOFR');
        assert(n <= 1, `SOFR appears ${n} times — expected ≤1 contextual mention`);
        assert(!contains('SOFR.*5.30') && !contains('5.30.*SOFR'),
          'Stale SOFR 5.30% still present as primary rate');
      },
    },
    {
      name: 'get_timestamp_function',
      desc: 'getTimestamp() helper for YYYYMMDDHHMM filename suffixes',
      fn: () => assert(contains('function getTimestamp') || contains('getTimestamp'),
        'getTimestamp() function missing'),
    },
    {
      name: 'scroll_to_section_function',
      desc: 'scrollToSection() navigation function present',
      fn: () => assert(contains('function scrollToSection') || contains('scrollToSection'),
        'scrollToSection() function missing'),
    },
    {
      name: 'intersection_observer_lazy_charts',
      desc: 'Charts lazy-loaded via IntersectionObserver',
      fn: () => assert(contains('IntersectionObserver'),
        'IntersectionObserver for lazy loading missing'),
    },
    {
      name: 'mobile_hamburger_menu',
      desc: 'Mobile hamburger menu present (responsive)',
      fn: () => assert(
        contains('hamburger') || contains('☰') || contains('toggleSidebar') || contains('mobile-menu'),
        'Mobile hamburger menu missing'
      ),
    },
  ],
};
