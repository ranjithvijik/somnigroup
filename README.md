<div align="center">

# 🟢 Somnigroup International (NYSE: SGI)

### Interactive Investment Research Dashboard

[![Deploy](https://img.shields.io/badge/AWS_Amplify-Live-00d4aa?style=for-the-badge&logo=awsamplify&logoColor=white)](https://main.d2bz9s024v2yld.amplifyapp.com/)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![Chart.js](https://img.shields.io/badge/Charts-Chart.js_4.4-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![jsPDF](https://img.shields.io/badge/Export-jsPDF_2.5-F7DF1E?style=for-the-badge)](https://github.com/parallax/jsPDF)
[![ExcelJS](https://img.shields.io/badge/Excel-ExcelJS_4.4-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)](https://github.com/exceljs/exceljs)
[![MathJax](https://img.shields.io/badge/Math-MathJax_3-blue?style=for-the-badge)](https://www.mathjax.org/)

**A single-file, zero-build, institutional-grade equity research platform**
**79 interactive charts · 34 analytical sections · 3 export formats · Live market data**

[**View Live Dashboard →**](https://main.d2bz9s024v2yld.amplifyapp.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Dashboard Sections](#-dashboard-sections-34)
- [Data Sources](#-data-sources)
- [Methodology & Equations](#-methodology--equations)
- [Live Data Architecture](#-live-data-architecture)
- [Export Guide](#-export-guide-pdf-slides-excel)
- [Interactive Modeling Lab](#-interactive-modeling-lab)
- [Deep Research & ML](#-deep-research--ml-insights)
- [NLP Methodology](#-nlp-sentiment-methodology)
- [Tech Stack](#-tech-stack)
- [Setup & Deployment](#-setup--deployment)
- [Configuration](#%EF%B8%8F-configuration)
- [Usage Guide](#-usage-guide)
- [Project Structure](#-project-structure)

---

## 🔍 Overview

A comprehensive, single-page investment research dashboard for **Somnigroup International** (NYSE: SGI) — the world's largest vertically integrated sleep products company. Built as a fully self-contained `index.html` with no build step, no framework, and no server dependency.

The dashboard combines institutional-quality financial analysis with machine learning insights, NLP sentiment analysis of earnings transcripts, and real-time market data — all in a responsive, theme-aware interface designed for hedge fund managers and institutional investors.

| Metric | Value |
|--------|-------|
| **Sections** | 34 analytical modules |
| **Charts** | 79 interactive Chart.js visualizations |
| **PDF Report** | 39-page A4 portrait research report |
| **Slide Deck** | 37-slide landscape presentation |
| **Excel Export** | 35-tab formatted workbook (color-coded via ExcelJS) |
| **Interactive Models** | 4 live simulation modules with 29 sliders |
| **File Size** | ~1,041 KB (single HTML file) |
| **Build Dependencies** | None (zero-build architecture) |

---

## ✨ Features

### 📊 Visualization & Analysis
- **79 interactive charts** — bar, line, radar, scatter, doughnut, waterfall, combo, heatmap, area, and candlestick
- **Financial modeling** — DCF, comparables, sum-of-parts, Monte Carlo simulation, reverse DCF
- **Quantitative risk analytics** — DuPont 5-factor decomposition, Altman Z-Score, Piotroski F-Score (7/9), ROIC/EVA
- **Peer comparison** — multi-dimensional radar charts and scatter plots vs SNBR, PRPL, LZB, LEG
- **NLP sentiment analysis** — TextBlob polarity + Loughran-McDonald financial lexicon across 4 quarters
- **ML trend detection** — EPS anomaly detection (z-score), revenue structural breaks, margin trajectory modeling

### 🔄 Live Market Data (5-Tier Fallback)
- **Tier 1:** Python Flask backend (localhost:5001, optional)
- **Tier 2:** Yahoo Finance via CORS proxies (real-time, free)
- **Tier 3:** Alpha Vantage API (CORS-native, 25 req/day free tier)
- **Tier 4:** In-memory session cache (last successful fetch)
- **Tier 5:** Static HTML data (always available, never blank)

### 📥 Three Export Formats
- **PDF Report** — 39-page A4 programmatic report via jsPDF (Bloomberg/GS-style, navy/teal/emerald color system)
- **PDF Slides** — 37-slide landscape presentation via jsPDF (navy headers, white body)
- **Excel Workbook** — 35-tab XLSX with full color-coding, cell formatting, and embedded charts via ExcelJS

### 🎨 Design & UX
- **Light/Dark theme** toggle (light default)
- **Mobile responsive** — tablet (1100px), mobile (768px), small mobile (480px)
- **Hamburger menu** on mobile with collapsible sidebar
- **Lazy-loaded charts** via IntersectionObserver (renders only when scrolled into view)
- **MathJax equations** for all financial formulas rendered in LaTeX

---

## 📑 Dashboard Sections (34)

| # | Section ID | Title | Description |
|---|-----------|-------|-------------|
| 01 | `exec-summary` | Executive Summary | KPI grid, stock chart, investment pillars, upside drivers |
| 02 | `company-overview` | Company Overview | Business description, brand portfolio, Mattress Firm M&A timeline |
| 03 | `industry-analysis` | Industry Analysis | TAM breakdown ($37.7B), CAGR comparison, Porter's Five Forces |
| 04 | `financial-performance` | Financial Performance | Revenue waterfall, EBITDA trends, margin evolution, quarterly combo |
| 05 | `segment-analysis` | Segment Analysis | Channel mix (wholesale vs D2C), geographic revenue, segment OI margins |
| 06 | `balance-sheet` | Balance Sheet & Cash Flow | Leverage trajectory, FCF bridge, capital allocation waterfall |
| 07 | `valuation` | Valuation & DCF | Football field chart, WACC vs TGR sensitivity heatmap |
| 08 | `catalysts-risks` | Catalysts & Risks | Synergy timeline ($225M target), risk matrix scatter plot |
| 09 | `technical-analysis` | Technical Analysis | 1-year price chart, MA50/MA200, support/resistance, RSI-14, volume |
| 10 | `peer-comparison` | Peer Comparison | 5-axis radar chart, P/E bar comparison, growth-margin scatter |
| 11 | `comps-studio` | Trading Comps Studio | Full public comps with EV/EBITDA, P/E, EV/Sales, FCF yield |
| 12 | `analyst-consensus` | Analyst Consensus | Rating distribution, earnings surprise history, EPS estimates bridge |
| 13 | `investment-narrative` | Investment Case | Three pillars: vertical integration moat, margin expansion, FCF compounding |
| 14 | `quant-risk` | Quant Risk Analytics | Return distribution histogram, ROIC vs WACC trend, correlation matrix |
| 15 | `advanced-valuation` | Advanced Valuation | Valuation methodology bridge, Monte Carlo simulation histogram (10K runs) |
| 16 | `ml-prediction` | ML Price Prediction | Price prediction simulator with sensitivity analysis + feature importance |
| 17 | `deep-research` | Deep Research & ML | NLP sentiment (12 charts), financial ML, technicals, consensus, correlations |
| 18 | `dcf-analysis` | DCF Analysis | Full 5-year DCF model with interactive assumptions |
| 19 | `modeling-lab` | Modeling Lab | Interactive DCF, leverage simulator, M&A modeler, reverse DCF |
| 20 | `regulatory-filings` | Regulatory Filings | SEC 8-K, 10-K, 10-Q filings tracker with FTC matter status |
| 21 | `esg-profile` | ESG Profile | Environmental, Social, Governance ratings and sustainability data |
| 22 | `institutional-ownership` | Institutional Ownership | Top holder table, ownership concentration, flow analysis |
| 23 | `management-team` | Management Team | Executive bios, compensation, tenure, and prior experience |
| 24 | `analyst-notes` | Analyst Notes | Individual analyst ratings and recent coverage actions |
| 25 | `price-vs-fve` | Price vs FVE | Historical stock price vs fair value estimate with upside/downside bands |
| 26 | `rating-history` | Rating History | Investment rating evolution timeline |
| 27 | `longterm-valuation` | Long-Term Valuation History | 10-year EV/EBITDA and P/E history |
| 28 | `dividend-history` | Dividend History | Annual dividend per share ($0.76→$1.08) and yield history |
| 29 | `forward-valuation` | Forward Valuation | FY2026E–FY2028E consensus revenue, EPS, and EBITDA estimates |
| 30 | `synergy-tracker` | Synergy Tracker | $225M total target — $80M realized, $145M remaining with milestones |
| 31 | `industry-position` | Industry Position | Market share, competitive positioning, housing recovery upside |
| 32 | `regulatory-history` | Regulatory History | FTC review timeline and antitrust implications |
| 33 | `macro-dashboard` | Macro Dashboard | Fed Funds (4.35%), 10-Yr Treasury, housing starts, GDP, CPI dashboard |
| 34 | `references` | References | 50 APA 7th edition citations across 7 categories with search and filter |

---

## 📂 Data Sources

All financial data is sourced from primary filings and institutional-grade providers:

### Primary Sources (Company Filings)
| Source | Data Used | Access |
|--------|-----------|--------|
| **SEC EDGAR** (10-K, 10-Q) | Revenue, COGS, SGA, D&A ($320M), interest expense ($502M), balance sheet ($18,450M total assets), cash flow | [sec.gov/cgi-bin/browse-edgar](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=SGI) |
| **Earnings Call Transcripts** | Q1–Q4 FY2025 full verbatim transcripts with speaker diarization | Via Perplexity Finance API |
| **Investor Day 2026 Presentation** | Long-term guidance, synergy targets ($225M), capital allocation framework | [somnigroup.com](https://www.somnigroup.com) |
| **Press Releases** | Quarterly earnings, acquisition announcements, guidance revisions | SEC 8-K filings |

### Market & Consensus Data
| Source | Data Used |
|--------|-----------|
| **Yahoo Finance** | Real-time stock quotes, historical OHLCV, peer data (Tier 2 live feed) |
| **Alpha Vantage** | Intraday/daily price data, technical indicators (Tier 3 live feed) |
| **Perplexity Finance API** | Consensus estimates (FY2026–2028E), analyst price targets, earnings history, institutional holders |
| **Bloomberg Terminal** | Peer valuation multiples, sector benchmarks (as cited) |
| **S&P Capital IQ** | Historical financial ratios, segment-level KPIs (as cited) |

### Industry & Academic Sources
| Source | Data Used |
|--------|-----------|
| **IBISWorld** | Mattress Manufacturing (NAICS 33791) and Bed & Mattress Stores (NAICS OD5462) industry reports |
| **Mintel** | Pillows & Mattresses US consumer research, 2025 |
| **ISPA** | International Sleep Products Association quarterly market reports |
| **FRED (St. Louis Fed)** | Fed Funds rate (DFF), 10-Yr Treasury (DGS10), PPI, housing starts |
| **BEA** | GDP growth data |
| **U.S. Census Bureau** | New residential construction data |
| **Damodaran (NYU Stern)** | Cost of capital by sector, equity risk premium (5.5%), beta estimates |

### Academic Methodology References
| Paper | Used For |
|-------|----------|
| Altman, E. I. (1968). *Financial ratios, discriminant analysis and the prediction of corporate bankruptcy.* Journal of Finance, 23(4), 589–609. | Z-Score model |
| Piotroski, J. D. (2000). *Value investing: The use of historical financial statement information.* Journal of Accounting Research, 38, 1–41. | F-Score model (SGI: 7/9) |
| Fama, E. F., & French, K. R. (1993). *Common risk factors in the returns on stocks and bonds.* Journal of Financial Economics, 33(1), 3–56. | Factor analysis |
| Loughran, T., & McDonald, B. (2011). *When is a liability not a liability?* Journal of Finance, 66(1), 35–65. | Financial sentiment lexicon |
| Wilder, J. W. (1978). *New Concepts in Technical Trading Systems.* | RSI-14 methodology |
| Murphy, J. J. (1999). *Technical Analysis of the Financial Markets.* | Moving averages and support/resistance |

---

## 📐 Methodology & Equations

### Discounted Cash Flow (DCF) Model

The primary valuation uses a 3-stage DCF with explicit forecasts for FY2026–2028E:

**Weighted Average Cost of Capital (WACC):**

```
WACC = (E/V) × Re + (D/V) × Rd × (1 - Tc)

Where:
  E/V   = Equity weight (market cap / enterprise value)
  Re    = Cost of equity (CAPM: Rf + β × ERP)
  D/V   = Debt weight (net debt / enterprise value)
  Rd    = Cost of debt (5.80%)
  Tc    = Corporate tax rate (25%)
  
Base case: WACC = 8.0%
  Rf = 4.30% (10-Yr Treasury)
  β  = 1.42 (36-month vs S&P 500)
  ERP = 5.50% (Damodaran US market)
  Kd = 5.80% (after-tax: 4.35%)
```

**Unlevered Free Cash Flow (UFCF):**

```
UFCF = NOPAT + D&A - CapEx - ΔNWC

Where:
  NOPAT  = EBIT × (1 - Tax Rate) = (EBITDA - D&A) × (1 - T)
  D&A    = $320M (FY2025)
  CapEx  = $163M (FY2025)

FY2025 actual FCFe: $633M  (NI $384 + D&A $320 - CapEx $163 + ΔNWC $92)
FY2026E: $745M | FY2027E: $862M | FY2028E: $980M
```

**Intrinsic Value (Gordon Growth Terminal Value):**

```
V₀ = Σ [FCFₜ / (1 + WACC)ᵗ] + TV / (1 + WACC)ⁿ

Where:
  TV  = FCFₙ × (1 + g) / (WACC - g)
  g   = Terminal growth rate (base: 2.5%)
  n   = Explicit forecast period (3 years)
  
DCF FVE: $100/share | Current: $69.37 | Upside: +44.1%
```

### Sensitivity Matrix

The DCF sensitivity heatmap tests WACC (6.5%–9.5%) against terminal growth rate (1.5%–3.5%) across 25 scenarios, with the base case highlighted.

### Altman Z-Score (Financial Distress)

```
Z = 1.2×X₁ + 1.4×X₂ + 3.3×X₃ + 0.6×X₄ + 1.0×X₅

Where:
  X₁ = Working Capital / Total Assets     = 620 / 18,450 = 0.034
  X₂ = Retained Earnings / Total Assets   = 2,180 / 18,450 = 0.118
  X₃ = EBIT / Total Assets                = 1,014 / 18,450 = 0.055
  X₄ = Market Cap / Total Liabilities     = Mkt Cap / 14,850
  X₅ = Revenue / Total Assets             = 7,477 / 18,450 = 0.405
  
Interpretation: Elevated leverage from Mattress Firm acquisition.
               Post-acquisition total assets: $18,450M, total equity: $3,600M.
               Pre-acquisition Z-Score was in Safe Zone (>2.99).
```

### Piotroski F-Score (Financial Strength)

9-point scoring system across profitability (4 tests), leverage/liquidity (3 tests), and operating efficiency (2 tests). Each criterion scores 0 or 1.

**SGI F-Score: 7/9 (Strong)**

### DuPont 5-Factor Decomposition (ROE Analysis)

```
ROE = Tax Burden × Interest Burden × Operating Margin × Asset Turnover × Equity Multiplier
    = (NI/EBT) × (EBT/EBIT) × (EBIT/Rev) × (Rev/Assets) × (Assets/Equity)
    = 0.750 × 0.505 × 0.136 × 0.405 × 5.125
    = ~10.7%

Where (FY2025):
  Total Assets  = $18,450M
  Equity        = $3,600M
  Asset Turnover = 7,477 / 18,450 = 0.405
  Equity Multiplier = 18,450 / 3,600 = 5.125
```

### Enterprise Value Calculation

```
EV = Market Cap + Total Debt - Cash & Equivalents
   Net Debt = $8,130M (Total Debt - Cash)
   Net Leverage: 7.81x Net Debt/EBITDA (FY2025)
   Credit Facility Covenant: 3.2x (stepping down as debt repays)
PEG Ratio = (P/E) / EPS Growth Rate
```

### ML Price Prediction Model

The ML simulator uses a multi-factor regression combining:
- Revenue growth rate sensitivity
- EBITDA margin trajectory
- Synergy realization pace ($80M realized, $145M remaining)
- Interest rate environment (Fed Funds 4.35%)
- Industry growth assumptions
- Comparable company multiples (P/E, EV/EBITDA)

Three model outputs (Linear Regression, Random Forest proxy, LSTM proxy) are displayed with confidence intervals.

### NLP Sentiment Scoring

```
Overall Polarity = TextBlob.sentiment.polarity  (range: -1.0 to +1.0)
Domain Sentiment = (Positive Financial Terms - Negative Financial Terms) / Total Terms
Confidence Index = (Confidence Words - Uncertainty Words) / Total Signal Words

Financial Lexicon (40+ terms):
  Positive: record, growth, outperform, strong, momentum, synergy, exceeded, innovation...
  Negative: decline, challenged, headwind, soft, pressure, tariff, uncertainty, risk...
  Forward:  guidance, expect, outlook, target, anticipate, 2026, 2027, long-term...
```

### Technical Indicators

```
RSI-14 = 100 - [100 / (1 + RS)]
  Where RS = Avg Gain (14 periods) / Avg Loss (14 periods)
  Wilder's smoothing method

Annualized Volatility = Monthly Std Dev × √12
  Using sample variance (Bessel-corrected: n-1 denominator)

Moving Averages: MA50, MA200 (simple arithmetic mean)
Support / Resistance: identified via rolling min/max over trailing windows
```

### EPS Anomaly Detection

```
Z-Score = (Observed EPS - Mean EPS) / Std Dev(EPS)
  Anomaly threshold: |Z| > 1.5 (flagged), |Z| > 2.0 (significant)

Q3 2025 adj EPS $0.95 flagged at Z = +2.01 (only anomaly in 10-quarter series)
```

### Monte Carlo Simulation

10,000 iterations sampling from:
- Revenue growth: Normal distribution (μ=6.4%, σ=3%)
- EBITDA margin: Normal distribution (μ=18.6%, σ=2%)
- WACC: Uniform distribution (7.0%–9.5%)
- Terminal growth: Uniform distribution (1.5%–3.5%)

Output: probability distribution of intrinsic value with percentile ranges.

---

## 📡 Live Data Architecture

The dashboard uses a progressive fallback strategy to ensure data is always displayed:

```
┌─────────────────────────────────────────────────────┐
│                   Data Request                       │
└──────────────────────┬──────────────────────────────┘
                       ▼
              ┌─────────────────┐
              │  Tier 1: Python │──── localhost:5001 (yfinance)
              │    Backend      │     Optional, highest fidelity
              └────────┬────────┘
                       ▼ (if unavailable)
              ┌─────────────────┐
              │ Tier 2: Yahoo   │──── allorigins / corsproxy / codetabs
              │ Finance CORS    │     Real-time, free, no key needed
              └────────┬────────┘
                       ▼ (if blocked)
              ┌─────────────────┐
              │ Tier 3: Alpha   │──── CORS-native API
              │   Vantage       │     25 req/day (free tier)
              └────────┬────────┘
                       ▼ (if exhausted)
              ┌─────────────────┐
              │ Tier 4: Session │──── In-memory cache
              │    Cache        │     Last successful fetch
              └────────┬────────┘
                       ▼ (if cold start)
              ┌─────────────────┐
              │ Tier 5: Static  │──── Hardcoded in HTML
              │    Data         │     Always available
              └─────────────────┘
```

**`propagateLivePrice()` function** — When live data arrives, this function cascades the updated price through every computed element on the dashboard:
- Executive Summary KPIs (market cap, P/E, upside %)
- Stock price chart (appends latest data point)
- DCF implied upside/downside recalculation
- ML price prediction model rebase
- Modeling Lab default values
- Peer comparison relative metrics

---

## 📥 Export Guide (PDF, Slides, Excel)

### How to Export

All export buttons are located in the **top navigation bar** of the dashboard:

| Button | Label | Output File | Format |
|--------|-------|-------------|--------|
| **Report** | ⬇ Report | `SGI_Investment_Research_YYYYMMDDHHMM.pdf` | A4 portrait, 39 pages |
| **Slides** | 📑 Slides | `SGI_Investment_Slides_YYYYMMDDHHMM.pdf` | 16:9 landscape, 37 slides |
| **Excel** | 📥 Excel | `SGI_Financial_Data_YYYYMMDDHHMM.xlsx` | 35-tab workbook |

Filenames include a timestamp (`YYYYMMDDHHMM`) at the moment of download to prevent overwrites.

### PDF Research Report (39 pages)

Click **"Report"** in the top bar. A 39-page institutional-quality report generates via jsPDF using a Bloomberg/Goldman Sachs-inspired design system (navy `#08183A`, steel `#1A5276`, crimson `#B91C1C`, emerald `#15803D`, amber `#A16207`):

The report covers: Cover · Executive Summary · Company Overview · Industry Analysis · Financial Performance · Key Ratios · Segment Analysis · Balance Sheet & Leverage · Valuation Summary · Catalysts · Risks & Mitigants · Peer Comparison · Trading Comps · Analyst Consensus · Quantitative Risk Metrics (Altman Z, Piotroski 7/9, DuPont) · Deep Research: Sentiment & ML · Deep Research: Technical & Consensus · ESG Profile · Institutional Ownership · Management Team · Analyst Notes · Price vs FVE · Rating History · Long-Term History · Dividend History · Forward Valuation · Synergy Tracker · Industry Position · Regulatory History · Advanced Valuation · Macro Dashboard · References

**Design details:**
- Navy `#08183A` running header + teal `#00B4D8` accent line on every page
- KPI cards with color-coded top bars by metric type
- Alternating row shading on all tables
- Color-coded values (emerald for positive, crimson for negative)
- Auto page-break via `checkY()` — no content ever clips below the footer

### PDF Slide Deck (37 slides)

Click **"📑 Slides"** in the top bar. A 37-slide landscape presentation:

Slides: Title · Executive Summary · Company Overview · Industry Analysis · Investment Rationale · Financial Performance · Segment Analysis · Balance Sheet & Leverage · Valuation Summary · DCF Model · Catalysts · Risks & Mitigants · Peer Comparison · Trading Comps · Analyst Consensus · Deep Research: Sentiment · Deep Research: ML Signals · ESG Profile · Institutional Ownership · Management Team · Quant Risk Analytics · Advanced Valuation · Monte Carlo Simulation · ML Prediction · Macro Dashboard · Technical Analysis · DCF Analysis · Modeling Lab Preview · Regulatory & FTC · Regulatory History · Analyst Notes Archive · Price vs FVE + Rating History · 10-Year History + Dividends · Synergy Tracker + Industry Position · Regulatory History + FTC · Advanced Valuation Models · Forward Valuation Summary

**Design details:**
- Navy header bar with teal accent line on every slide
- White body background
- Consistent footer: section name + slide `n / 37`
- Bullet points with teal/emerald accent markers

### Excel Workbook (35 tabs)

Click **"📥 Excel"** in the top bar. A 35-tab XLSX workbook generated via ExcelJS 4.4 with full cell-level color coding:

| Tab | Content |
|-----|---------|
| Income Statement | FY2021–FY2028E: Revenue, COGS, GP, EBITDA, Net Income, EPS, Shares |
| Balance Sheet | FY2021–FY2025: Assets, Liabilities, Equity, Net Debt ($8,130M) |
| Cash Flow | FY2021–FY2025: OCF, CapEx, FCF, Buybacks, Dividends, D&A ($320M) |
| Quarterly | Q3 2023–Q4 2025: Revenue, EPS (reported/adj), EBITDA, FCF, margins |
| Ratios | FY2021–FY2025: Margins, ROE, ROIC, Net Debt/EBITDA (7.81x), ICR (2.07x) |
| Segments | Revenue and OI by segment (North America, Mattress Firm, International) |
| Estimates | FY2026E–FY2028E consensus Revenue, EBITDA, Net Income, EPS, FCF |
| Peer Comparison | SGI vs SNBR, PRPL, LZB, LEG across 10 metrics |
| Valuation | 6 methods × Low/Base/High: DCF ($100), P/E, EV/EBITDA, SOTP, MC |
| Sentiment Analysis | Q1–Q4 2025: TextBlob polarity, domain sentiment, CEO/CFO sentiment |
| ML Analysis | Revenue structural breaks, EPS z-scores, technicals, correlation matrix |
| Topic Frequency | 20+ keyword clusters across Q1–Q4 2025 with trend descriptions |
| Chart - Revenue & EBITDA | Revenue and EBITDA bar chart data |
| Chart - EPS Trend | EPS reported/adj trend data |
| Chart - Cash Flow | FCF and OCF trend data |
| Chart - Valuation | Multi-method valuation range data |
| Chart - Topics | Topic frequency trend data |
| Technical Analysis | MA50, MA200, RSI-14, support/resistance signal table (17 rows) |
| Macro Dashboard | 10 macro indicators + Fed Funds, housing, CPI, GDP, consumer confidence |
| References | 50 citations with category, APA 7th edition text, and clickable URLs |
| DCF Analysis | 5-year DCF model with WACC/TGR sensitivity heatmap |
| Trading Comps | Full public comps with EV/EBITDA, P/E, EV/Sales, FCF yield |
| Operating KPIs | Store count, D2C mix, ASP, unit volumes, market share |
| ESG Profile | Environmental, Social, Governance scores and key metrics |
| Institutional Ownership | Top 20 holders with shares, % ownership, change |
| Synergy Tracker | $225M synergy target — $80M realized, $145M remaining with milestones |
| Dividend History | Annual DPS history ($0.76→$1.08), yield, payout ratio |
| Forward Valuation | Consensus FY2026E–FY2028E estimates by metric |
| Management Team | Executive bios, compensation, tenure |
| Rating History | Investment rating and price target evolution |
| 10-Year History | Revenue, EBITDA, EPS, P/E, EV/EBITDA 10-year history |
| Industry Position | Market share, TAM, competitive positioning |
| Catalysts & Risks | 5 catalysts + 5 risks with probability/impact scores |
| Investment Case | Three investment pillars with supporting metrics |
| Analyst Notes | Individual analyst coverage actions |

**Formatting applied:**
- Column widths auto-sized for all tabs
- Number formats: `#,##0.0` for financials, `0.0%` for margins, `#,##0.00` for EPS
- Color-coded themes per tab (navy/gold/teal/blue/amber/purple/gray)
- Heatmap correlation matrix (green = high positive, red = high negative)
- Positive values in green, negative values in red throughout

---

## 🧲 Interactive Modeling Lab

Four fully interactive simulation modules with real-time computation. Navigate to **Section 19 (Modeling Lab)** in the sidebar.

### 1. DCF Model Builder

Adjust parameters with sliders — results update instantly:

| Parameter | Range | Default | Sensitivity |
|-----------|-------|---------|-------------|
| Revenue Growth | 0%–15% | 6.4% | High — drives top-line FCF |
| EBITDA Margin | 12%–25% | 18.6% | High — drives profitability |
| WACC | 6%–12% | 8.5% | Very High — discount rate |
| Terminal Growth | 1%–5% | 2.5% | High — terminal value |
| Tax Rate | 20%–30% | 25% | Medium |
| CapEx/Revenue | 1%–4% | 2.2% | Medium |

**Output:** Implied share price, upside/downside %, and 5-year FCF projection.

### 2. Leverage Scenario Simulator

| Parameter | Range | Default |
|-----------|-------|---------|
| EBITDA Growth Rate | 0%–20% | 10% |
| Interest Rate | 3%–8% | 5.5% |
| Debt Paydown Rate | 0%–30% | 15% |
| Dividend Payout | 0%–50% | 20% |
| Share Buyback | 0%–$500M | $0 |

**Output:** 5-year Net Debt/EBITDA trajectory, year-by-year EPS, total leverage reduction.

### 3. M&A Accretion/Dilution Modeler

Model hypothetical bolt-on acquisitions:

| Parameter | Range | Default |
|-----------|-------|---------|
| Target Revenue | $50M–$2B | $500M |
| Target EBITDA Margin | 5%–30% | 15% |
| Purchase Price (EV/EBITDA) | 4x–15x | 8x |
| Synergies ($M) | $0–$200M | $50M |
| Interest Cost | 3%–8% | 5% |

**Output:** EPS accretion/dilution, pro-forma leverage, synergy payback period.

### 4. Reverse DCF Calculator

| Input | Description |
|-------|-------------|
| Current Market Price | Solve backwards from observed price |
| WACC | Your assumed discount rate |
| Terminal Growth | Your assumed perpetuity growth |
| Current FCF | Starting free cash flow base |
| Forecast Period | Number of explicit years |

**Output:** Implied revenue growth rate the market is pricing in, compared to management guidance and consensus estimates.

---

## 🧠 Deep Research & ML Insights

### NLP Sentiment Analysis (Section 17A)
- **4 quarters** of earnings call transcripts (Q1–Q4 FY2025) analyzed
- TextBlob polarity scoring + domain-adapted financial lexicon (40+ terms)
- CEO vs CFO sentiment divergence tracking across all 4 calls
- Management confidence index (confidence words vs uncertainty words)
- Prepared remarks vs analyst Q&A sentiment comparison
- Interactive heatmap table with color-coded values

### ML Financial Analysis (Section 17B)
- Revenue structural break detection: pre-acquisition avg $1,230M/qtr vs post-acquisition $1,869M/qtr (+52%)
- Adjusted EPS anomaly detection with z-score bands (±1σ and ±2σ)
- Multi-line margin trajectory: gross, operating, and adjusted EBITDA margins over 10 quarters
- Leverage deleveraging trajectory chart with 3.2x credit facility covenant band

### Technical Indicators (Section 9)
- 1-year price chart with MA50 and MA200 overlays
- Support and resistance levels
- RSI-14 oscillator with overbought/oversold zones
- Volume bars and signal summary table (8 rows, color-coded BULLISH/BEARISH/CAUTION)
- Annualized volatility (sample variance, Bessel-corrected)

### Consensus & Valuation (Section 17D)
- Analyst price target football field chart ($83–$115 range, avg $99.67)
- Strong Buy consensus (83.3% bullish, 16.7% neutral, 0% bearish)
- Forward estimates table: FY2026E–FY2028E (Revenue, EPS, EBITDA, FCF)
- Implied CAGR KPI grid (Revenue 5.9%, EPS 37.9%, FCF 21.1%)

### Correlation Matrix (Section 17E)
- Interactive 6×6 heatmap: Revenue, Gross Profit, Op Income, EBITDA, FCF, Adj EBITDA
- Color-coded Pearson coefficients (green ≥0.9, teal ≥0.6, neutral <0.6)

### Macro Dashboard (Section 33)
- 6 macro KPI cards with trend annotations
- Fed Funds rate: 4.35% (corrected from SOFR 5.30%)
- 10-Yr Treasury time-series chart (2022–2026)
- Housing Starts bar chart
- Macro → Valuation impact table (rates, housing, CPI, confidence, GDP)

---

## 🔬 NLP Sentiment Methodology

### Data Collection
- 4 full earnings call transcripts (Q1–Q4 FY2025) sourced via Perplexity Finance API
- Combined corpus: ~366,000 characters of verbatim management commentary and analyst Q&A
- Speaker diarization: CEO (Scott Thompson), CFO (Bhaskar Rao), analysts, operator

### Processing Pipeline

```
Raw Transcript
    │
    ├── Split: Prepared Remarks vs Q&A Section
    │
    ├── TextBlob Sentiment
    │   ├── Overall Polarity (-1.0 to +1.0)
    │   ├── Subjectivity (0.0 to 1.0)
    │   ├── Prepared Remarks polarity
    │   └── Q&A polarity
    │
    ├── Domain-Adapted Financial Lexicon
    │   ├── 20+ positive terms (record, growth, outperform, synergy...)
    │   ├── 20+ negative terms (decline, headwind, tariff, pressure...)
    │   └── Domain Sentiment = (positive - negative) / total
    │
    ├── Speaker-Level Sentiment
    │   ├── CEO sentiment (Scott Thompson turns)
    │   └── CFO sentiment (Bhaskar Rao turns)
    │
    ├── Confidence/Uncertainty Index
    │   ├── Confidence words: confident, on track, pleased
    │   ├── Uncertainty words: uncertain, risk, cautious
    │   └── Index = (confidence - uncertainty) / total signal words
    │
    └── Topic Frequency Analysis
        ├── 9 keyword clusters tracked per quarter
        └── Synergy, tariff, Mattress Firm, international,
            innovation, margin, guidance, advertising, leverage
```

### Key Findings
| Metric | Q1 2025 | Q2 2025 | Q3 2025 | Q4 2025 | Trend |
|--------|---------|---------|---------|---------|-------|
| Overall Polarity | 0.081 | 0.092 | 0.095 | 0.098 | ↗ Steadily improving |
| Domain Sentiment | 0.138 | 0.445 | 0.358 | 0.432 | ↗ Strong post-Q1 |
| CEO Sentiment | 0.091 | 0.111 | 0.111 | 0.117 | ↗ Growing confidence |
| CFO Sentiment | -0.035 | 0.009 | -0.007 | 0.006 | → Neutral (typical) |
| Confidence Index | 0.765 | 0.385 | 0.590 | 0.600 | Stable |
| Synergy Mentions | 4 | 13 | 28 | 51 | ↗↗ 13x increase |
| Tariff Mentions | 19 | 4 | 26 | 26 | Peaked Q1, stabilized |

---

## 🛠 Tech Stack

| Component | Technology | Version | CDN |
|-----------|-----------|---------|-----|
| Charts | [Chart.js](https://www.chartjs.org/) | 4.4.0 | jsdelivr |
| PDF Export | [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 | cdnjs |
| Screenshots | [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | cdnjs |
| Excel Export | [ExcelJS](https://github.com/exceljs/exceljs) | 4.4.0 | jsdelivr |
| Math Rendering | [MathJax](https://www.mathjax.org/) | 3.x | jsdelivr |
| Fonts | [Google Fonts](https://fonts.google.com/) | Inter, JetBrains Mono | Google |
| Hosting | [AWS Amplify](https://aws.amazon.com/amplify/) | — | — |
| CI/CD | [GitHub Actions](https://github.com/features/actions) | v4 | — |

**Note:** Excel export uses **ExcelJS 4.4.0** (not SheetJS) for full cell-level color formatting support. All libraries are loaded from CDN — **zero npm dependencies, zero build step**.

---

## 🚀 Setup & Deployment

### Option 1: Local Development (Zero Setup)

```bash
# Clone the repository
git clone https://github.com/ranjithvijik/somnigroup.git
cd somnigroup

# Open directly in browser — no server needed
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

The dashboard works fully offline with static data (Tier 5 fallback). Live data features require internet access for Yahoo Finance / Alpha Vantage APIs.

### Option 2: AWS Amplify Deployment

1. **Fork** this repository
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click **"Host web app"** → Connect your GitHub repo
4. Amplify will auto-detect `amplify.yml` and deploy
5. Add environment variable: `AV_API_KEY` = your Alpha Vantage key
6. Every push to `main` triggers automatic redeployment

### Option 3: Any Static Host

Upload `index.html` to any static hosting provider:
- **Netlify**: Drag and drop the file
- **Vercel**: `vercel --single-file index.html`
- **GitHub Pages**: Enable Pages on the repo settings
- **S3 + CloudFront**: Upload to S3 bucket with static website hosting enabled

---

## ⚙️ Configuration

### Alpha Vantage API Key

The dashboard uses Alpha Vantage as a Tier 3 data source. To enable it:

1. Get a free API key at [alphavantage.co](https://www.alphavantage.co/support/#api-key)
2. **For Amplify**: Add `AV_API_KEY` as an environment variable in Amplify Console → App settings → Environment variables
3. **For GitHub Actions**: Add `AV_API_KEY` as a repository secret in Settings → Secrets → Actions
4. **For local dev**: Replace `__AV_API_KEY__` in `index.html` with your key, or leave it — Yahoo Finance (Tier 2) works without any key

### Optional Python Backend (Tier 1)

For highest-fidelity real-time data via yfinance:

```bash
pip install flask flask-cors yfinance
python backend.py
```

The backend runs on `localhost:5001` and provides real-time quotes, historical OHLCV, and peer comparisons. The dashboard auto-detects it when running.

### Theme Configuration

The dashboard defaults to **light theme** (`data-theme="light"` on the HTML element). Users can toggle dark mode via the 🌙 button in the top navigation bar.

---

## 📖 Usage Guide

### Navigation
- Use the **sidebar** (left panel) to jump to any of the 34 sections
- Sections are **lazy-loaded** — charts render only when scrolled into view for performance
- On mobile, tap the **hamburger menu** (☰) to open the sidebar
- Active section is highlighted in the sidebar as you scroll

### Exporting — Step by Step

**To export the PDF report:**
1. Click **"Report"** (teal button) in the top navigation bar
2. Wait 3–5 seconds for generation (button shows "Generating...")
3. A 39-page PDF downloads as `SGI_Investment_Research_YYYYMMDDHHMM.pdf`
4. The report uses a Bloomberg/GS-style design — optimized for print and screen

**To export the slide deck:**
1. Click **"📑 Slides"** (gold button) in the top navigation bar
2. Wait 3–5 seconds for generation
3. A 37-slide landscape PDF downloads as `SGI_Investment_Slides_YYYYMMDDHHMM.pdf`
4. Slides use navy headers with white body — ready for projection or screen sharing

**To export the Excel workbook:**
1. Click **"📥 Excel"** (green button) in the top navigation bar
2. An XLSX file downloads as `SGI_Financial_Data_YYYYMMDDHHMM.xlsx`
3. Open in Excel, Google Sheets, or LibreOffice Calc
4. 35 color-coded tabs with full cell formatting
5. Charts are embedded as data tabs with series ready for re-plotting

**To export a single section:**
1. Navigate to any section
2. Click the **"Export Section"** button in the section header
3. A landscape PDF screenshot of that section downloads

### Interactive Models — Step by Step

1. Click **"Modeling Lab"** (Section 19) in the sidebar
2. Choose a module tab: **DCF**, **Leverage**, **M&A**, or **Reverse DCF**
3. Drag any slider to adjust an assumption
4. Results recalculate instantly in the output panel
5. No "submit" or "calculate" button needed — all computation is real-time

### Reading Live Data Status
- **Top bar** shows current stock price with timestamp
- **"Static Data"** label (gray) = using cached/hardcoded data
- **"Live"** label (green) = real-time data from Yahoo Finance or Alpha Vantage
- **Last updated** timestamp shown next to the price

---

## 📁 Project Structure

```
somnigroup/
├── index.html                          # The entire application (~1,041 KB)
│                                        # Contains: HTML structure, CSS styles, JavaScript logic,
│                                        # 79 Chart.js visualizations, 3 export engines (PDF/Slides/Excel),
│                                        # 5-tier live data engine, interactive modeling lab (29 sliders),
│                                        # NLP/ML analysis, 34 analytical sections, static content
├── amplify.yml                         # AWS Amplify build configuration
│                                        # Pre-build: injects AV_API_KEY via sed replacement
├── SGI_Full_Technical_Documentation.pdf # 140-page quantitative technical reference
│                                        # Covers all 32 analytical methods with math equations,
│                                        # Python code implementations, and corrected data values
├── .github/
│   └── workflows/
│       └── deploy.yml                  # GitHub Actions CI/CD pipeline
│                                        # Triggers on push to main, injects API key, uploads artifact
└── README.md                           # This documentation file
```

### Why Single File?

The entire dashboard is a single `index.html` by design:
- **Zero build step** — no webpack, no bundler, no npm install
- **Instant deployment** — upload one file to any web server
- **Offline capable** — works without internet (Tier 5 static data fallback)
- **Portable** — email it, put it on a USB drive, host it anywhere
- **Auditable** — view source, every line of code is transparent
- **No CORS issues** — all CDN libraries loaded from established CDNs with permissive headers

---

<div align="center">

**Built with data from SEC filings, earnings transcripts, and institutional financial databases.**
**All citations in APA 7th edition format. 50 references across 7 categories.**

[![Live Dashboard](https://img.shields.io/badge/View_Live_Dashboard-00d4aa?style=for-the-badge&logo=googlechrome&logoColor=white)](https://main.d2bz9s024v2yld.amplifyapp.com/)

</div>
