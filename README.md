<div align="center">

# 🟢 Somnigroup International (NYSE: SGI)

### Interactive Investment Research Dashboard

[![Deploy](https://img.shields.io/badge/AWS_Amplify-Live-00d4aa?style=for-the-badge&logo=awsamplify&logoColor=white)](https://main.d2bz9s024v2yld.amplifyapp.com/)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![Chart.js](https://img.shields.io/badge/Charts-Chart.js_4.4-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![jsPDF](https://img.shields.io/badge/Export-jsPDF_2.5-F7DF1E?style=for-the-badge)](https://github.com/parallax/jsPDF)
[![SheetJS](https://img.shields.io/badge/Excel-SheetJS-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)](https://sheetjs.com/)
[![MathJax](https://img.shields.io/badge/Math-MathJax_3-blue?style=for-the-badge)](https://www.mathjax.org/)

**A single-file, zero-build, institutional-grade equity research platform**
**41 interactive charts · 17 analytical sections · 3 export formats · Live market data**

[**View Live Dashboard →**](https://main.d2bz9s024v2yld.amplifyapp.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Dashboard Sections](#-dashboard-sections-17)
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
| **Sections** | 17 analytical modules |
| **Charts** | 41 interactive Chart.js visualizations |
| **PDF Report** | 17-page A4 portrait research report |
| **Slide Deck** | 17-slide landscape presentation |
| **Excel Export** | 13-tab formatted workbook |
| **Interactive Models** | 4 live simulation modules with 30+ sliders |
| **File Size** | ~436 KB (single HTML file) |
| **Build Dependencies** | None (zero-build architecture) |

---

## ✨ Features

### 📊 Visualization & Analysis
- **41 interactive charts** — bar, line, radar, scatter, doughnut, waterfall, combo, heatmap
- **Financial modeling** — DCF, comparables, sum-of-parts, Monte Carlo simulation, reverse DCF
- **Quantitative risk analytics** — DuPont decomposition, Altman Z-Score, Piotroski F-Score, ROIC/EVA
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
- **PDF Report** — 17-page A4 programmatic report via jsPDF (white background, teal accents)
- **PDF Slides** — 17-slide landscape presentation via jsPDF (navy headers, white body)
- **Excel Workbook** — 13-tab XLSX with column widths and number formatting via SheetJS

### 🎨 Design & UX
- **Light/Dark theme** toggle (light default)
- **Mobile responsive** — tablet (1100px), mobile (768px), small mobile (480px)
- **Hamburger menu** on mobile with collapsible sidebar
- **Lazy-loaded charts** via IntersectionObserver (renders only when scrolled into view)
- **MathJax equations** for all financial formulas rendered in LaTeX

---

## 📑 Dashboard Sections (17)

| # | Section | Description | Charts |
|---|---------|-------------|--------|
| **01** | 🔷 Executive Summary | KPI grid, stock chart, upside drivers, investment pillars | 2 |
| **02** | 🏢 Company Overview | Business description, brand portfolio, Mattress Firm M&A timeline | — |
| **03** | 📊 Industry Analysis | TAM breakdown ($37.7B), CAGR comparison, Porter's Five Forces | 3 |
| **04** | 💹 Financial Performance | Revenue waterfall, EBITDA trends, margin evolution, quarterly combo | 4 |
| **05** | 🔧 Segment Analysis | Channel mix (wholesale vs D2C), geographic revenue, segment OI margins | 3 |
| **06** | ⚖️ Balance Sheet & CF | Leverage trajectory, FCF bridge, capital allocation waterfall | 3 |
| **07** | 🎯 Valuation & DCF | Football field chart, WACC vs TGR sensitivity heatmap | 2 |
| **08** | ⚡ Catalysts & Risks | Synergy timeline ($225M target), risk matrix scatter plot | 2 |
| **09** | 🔍 Peer Comparison | 5-axis radar chart, P/E bar comparison, growth-margin scatter | 3 |
| **10** | 📈 Analyst Consensus | Rating distribution, earnings surprise history, EPS estimates bridge | 3 |
| **11** | 📝 Investment Case | Three pillars: vertical integration moat, margin expansion, FCF compounding | — |
| **12** | 📐 Quant Risk Analytics | Return distribution histogram, ROIC vs WACC trend, correlation matrix | 2+ |
| **13** | 🔬 Advanced Valuation | Valuation methodology bridge, Monte Carlo simulation histogram (10K runs) | 2 |
| **14** | 🤖 ML Predictions | Price prediction simulator with sensitivity analysis + feature importance | 2 |
| **15** | 🧠 Deep Research & ML | NLP sentiment (12 charts), financial ML, technicals, consensus, correlations | 12 |
| **16** | 🧲 Modeling Lab | Interactive DCF, leverage simulator, M&A modeler, reverse DCF | 4 modules |
| **17** | 📚 References | 15 APA 7th edition formatted citations with DOIs and URLs | — |

---

## 📂 Data Sources

All financial data is sourced from primary filings and institutional-grade providers:

### Primary Sources (Company Filings)
| Source | Data Used | Access |
|--------|-----------|--------|
| **SEC EDGAR** (10-K, 10-Q) | Revenue, COGS, SGA, D&A, interest expense, balance sheet, cash flow | [sec.gov/cgi-bin/browse-edgar](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=SGI) |
| **Earnings Call Transcripts** | Q1–Q4 FY2025 full verbatim transcripts with speaker diarization | Via Perplexity Finance API |
| **Investor Day 2026 Presentation** | Long-term guidance, synergy targets, capital allocation framework | [somnigroup.com](https://www.somnigroup.com) |
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
| **FRED (St. Louis Fed)** | PPI mattress manufacturing, 30-year mortgage rates, housing starts |
| **U.S. Census Bureau** | New residential construction data |
| **Damodaran (NYU Stern)** | Cost of capital by sector, equity risk premium, beta estimates |

### Academic Methodology References
| Paper | Used For |
|-------|----------|
| Altman, E. I. (1968). *Financial ratios, discriminant analysis and the prediction of corporate bankruptcy.* Journal of Finance, 23(4), 589–609. | Z-Score model |
| Piotroski, J. D. (2000). *Value investing: The use of historical financial statement information.* Journal of Accounting Research, 38, 1–41. | F-Score model |
| Fama, E. F., & French, K. R. (1993). *Common risk factors in the returns on stocks and bonds.* Journal of Financial Economics, 33(1), 3–56. | Factor analysis |
| Loughran, T., & McDonald, B. (2011). *When is a liability not a liability?* Journal of Finance, 66(1), 35–65. | Financial sentiment lexicon |

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
  Rd    = Cost of debt (weighted average interest rate)
  Tc    = Corporate tax rate (25%)
  
Base case: WACC = 7.95% (Rf=4.25%, β=1.0, ERP=5.5%, Rd=5.0%)
```

**Intrinsic Value (Gordon Growth Terminal Value):**

```
V₀ = Σ [FCFₜ / (1 + WACC)ᵗ] + TV / (1 + WACC)ⁿ

Where:
  FCFₜ = Free cash flow in year t
  TV   = FCFₙ × (1 + g) / (WACC - g)
  g    = Terminal growth rate (base: 3.0%)
  n    = Explicit forecast period (3 years)
```

**Free Cash Flow:**

```
FCF = EBITDA × (1 - Tax Rate) + D&A - CapEx - ΔWC

FY2025 actual: FCF = $633M
FY2026E consensus: FCF = $745M
FY2028E consensus: FCF = $1,124M
```

### Sensitivity Matrix

The DCF sensitivity heatmap tests WACC (6.5%–9.5%) against terminal growth rate (2.0%–4.0%) across 25 scenarios, with the base case highlighted.

### Altman Z-Score (Financial Distress)

```
Z = 1.2×X₁ + 1.4×X₂ + 3.3×X₃ + 0.6×X₄ + 1.0×X₅

Where:
  X₁ = Working Capital / Total Assets
  X₂ = Retained Earnings / Total Assets
  X₃ = EBIT / Total Assets
  X₄ = Market Cap / Total Liabilities
  X₅ = Revenue / Total Assets
  
SGI Z-Score: 2.10 (Gray Zone: 1.81–2.99)
Interpretation: Elevated leverage from Mattress Firm acquisition.
               Pre-acquisition Z-Score was 2.8 (Safe Zone).
```

### Piotroski F-Score (Financial Strength)

9-point scoring system across profitability (4 tests), leverage/liquidity (3 tests), and operating efficiency (2 tests). Each criterion scores 0 or 1. SGI scores are computed from the latest quarterly financials.

### DuPont Decomposition (ROE Analysis)

```
ROE = Net Margin × Asset Turnover × Equity Multiplier
    = (Net Income/Revenue) × (Revenue/Assets) × (Assets/Equity)
```

### Enterprise Value Calculation

```
EV = Market Cap + Total Debt - Cash & Equivalents
PEG Ratio = (P/E) / EPS Growth Rate
```

### ML Price Prediction Model

The ML simulator uses a multi-factor regression combining:
- Revenue growth rate sensitivity
- EBITDA margin trajectory
- Synergy realization pace
- Interest rate environment
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
  Where RS = Average Gain (14 periods) / Average Loss (14 periods)

Annualized Volatility = Monthly Std Dev × √12

Moving Averages: Simple arithmetic mean of closing prices over 6M, 12M, 24M windows
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
- Terminal growth: Uniform distribution (2.0%–4.0%)

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

| Button | Icon | Output File | Format |
|--------|------|-------------|--------|
| **Export PDF** | ⬇ | `SGI_Investment_Research_Report.pdf` | A4 portrait, 17 pages |
| **Export Slides** | 📑 | `SGI_Investment_Slides_March2026.pdf` | 16:9 landscape, 17 slides |
| **Excel Data** | 📥 | `SGI_Financial_Data_2026.xlsx` | 13-tab workbook |

Additionally, each section has an **"Export Section"** button that captures that section as a standalone PDF screenshot.

### PDF Research Report — Detailed Guide

Click **"Export PDF"** in the top bar. A 17-page institutional-quality research report generates programmatically via jsPDF (no server required):

| Page | Section | What's Included |
|------|---------|-----------------|
| 1 | **Cover** | Company name, ticker, price target ($100), current price ($69.37), upside (+44%), LONG recommendation badge, analyst consensus summary |
| 2 | **Executive Summary** | 6 KPI boxes (Market Cap, Fwd P/E, EPS, FCF Yield, Div Yield, Rating), investment rationale narrative, 3 investment pillars with descriptions |
| 3 | **Company Overview** | Business description, key facts table (CEO, HQ, employees, revenue, D2C mix, store count), brand portfolio table (Tempur-Pedic, Sealy, Stearns & Foster, Mattress Firm) |
| 4 | **Industry Analysis** | TAM sizing ($37.7B), market share data, industry growth drivers, competitive dynamics narrative |
| 5 | **Financial Performance** | 5-year income statement table (FY2021–FY2025 + FY2026E–2028E), revenue/EBITDA/EPS trends with YoY growth rates |
| 6 | **Key Ratios** | Profitability ratios (gross/EBITDA/net margins), return metrics (ROE, ROA, ROIC), leverage ratios (D/E, Net Debt/EBITDA, interest coverage) |
| 7 | **Segment Analysis** | Revenue by segment (North America, Mattress Firm, International), operating income margins by segment, geographic mix |
| 8 | **Balance Sheet & Leverage** | Balance sheet summary, debt maturity narrative, FCF generation trend, deleveraging trajectory |
| 9 | **Valuation Summary** | 6-method valuation table (DCF, Forward P/E, EV/EBITDA, SOTP, Analyst Consensus, Monte Carlo) with bear/base/bull ranges |
| 10 | **Catalysts** | 5 catalyst descriptions with timeline and EPS impact estimates |
| 11 | **Risks & Mitigants** | 5 key risks with probability, impact, and specific mitigant for each |
| 12 | **Peer Comparison** | SGI vs SNBR, PRPL, LZB, LEG across 10 metrics |
| 13 | **Analyst Consensus** | Individual analyst ratings table (firm, analyst, action, rating, price target), consensus distribution |
| 14 | **Quantitative Risk Metrics** | Altman Z-Score breakdown, Piotroski F-Score, DuPont decomposition components |
| 15 | **Deep Research: Sentiment & ML** | NLP sentiment table (Q1–Q4 color-coded), key findings bullets, 4 ML KPI boxes |
| 16 | **Deep Research: Technical & Consensus** | Technical indicators table, analyst consensus KPIs, forward estimates table, leverage trajectory, correlation matrix |
| 17 | **Disclaimer & References** | Disclaimer paragraph, 10 APA 7th edition references with URLs |

**Design details:**
- White background with teal accent bars
- Navy header text, gray body text
- Alternating row shading on all tables
- Color-coded values (green for positive, red for negative)
- Footer on every page: "SGI | Research Report" with page number

### PDF Slide Deck — Detailed Guide

Click **"Export Slides"** in the top bar. A 17-slide landscape presentation generates:

| Slide | Title | Content |
|-------|-------|---------|
| 1 | Title Slide | Company name, ticker, LONG badge, price target boxes, date |
| 2 | Executive Summary | 6 KPI grid, 4 key investment bullets |
| 3 | Company Overview | Key facts, brand portfolio with descriptions |
| 4 | Industry Analysis | TAM metrics, market dynamics bullets |
| 5 | Investment Rationale | 3 numbered pillars with bullet point evidence |
| 6 | Financial Performance | 5-year financial summary table |
| 7 | Segment Analysis | Segment revenue/OI table, key metrics |
| 8 | Balance Sheet & Leverage | Leverage metrics, debt paydown narrative |
| 9 | Valuation Summary | 6-method valuation range table |
| 10 | DCF Model | Assumptions table, implied price, key sensitivities |
| 11 | Catalysts | 5 catalyst descriptions with impact estimates |
| 12 | Risks & Mitigants | 5 risk descriptions with severity and mitigants |
| 13 | Peer Comparison | Competitive positioning table |
| 14 | Analyst Consensus | Rating breakdown, price target range, recent actions |
| 15 | **Deep Research: Sentiment** | NLP metrics table, key insight bullets, topic frequency |
| 16 | **Deep Research: ML Signals** | 6 KPI grid, forward estimates, key takeaways |
| 17 | Final Recommendation | LONG badge, price target, upside, 6 key metrics, 4 summary bullets |

**Design details:**
- Navy header bar with teal accent line on every slide
- White body background
- Consistent footer: "SGI | Research Report" with slide count
- Bullet points with teal/green accent markers

### Excel Workbook — Detailed Guide

Click **"Excel Data"** in the top bar. A 13-tab workbook downloads:

| Tab | Rows | Columns | Key Data Points |
|-----|------|---------|-----------------|
| **Income Statement** | 8 | 16 | FY2021–FY2028E: Revenue, COGS, Gross Profit, Gross Margin, SGA, D&A, Op Income, EBITDA, Interest, Pre-Tax, Tax, Net Income, EPS, Shares |
| **Balance Sheet** | 5 | 11 | FY2021–FY2025: Cash, Current Assets, Goodwill, Intangibles, Total Assets, Current Liabilities, LT Debt, Total Debt, Total Liabilities, Equity, Net Debt |
| **Cash Flow** | 5 | 7 | FY2021–FY2025: OCF, CapEx, FCF, Buybacks, Dividends, D&A |
| **Quarterly** | 10 | 12 | Q3 2023–Q4 2025: Revenue, Gross Profit, Op Income, Net Income, EPS, EBITDA, Adj EBITDA, Adj EPS, FCF, Gross Margin, Op Margin |
| **Ratios** | 11 | 6 | FY2021–FY2025: Gross/EBITDA/Net Margins, ROE, ROA, ROIC, D/E, Net Debt/EBITDA, Current Ratio, Interest Coverage, FCF Conversion |
| **Segments** | 4 | 4 | Revenue and Operating Income by segment (North America, Mattress Firm, International) |
| **Estimates** | 3 | 6 | FY2026E–FY2028E: Revenue, EBITDA, Net Income, EPS, FCF |
| **Peer Comparison** | 5 | 11 | SGI vs 4 peers: Market Cap, P/E, EV/EBITDA, Gross Margin, Net Margin, Rev Growth, D/E, FCF Yield, Div Yield, ROE |
| **Valuation** | 6 | 4 | 6 methods × Low/Base/High: DCF, Forward P/E, EV/EBITDA, SOTP, Analyst Consensus, Monte Carlo |
| **References** | 15 | 3 | Citation number, APA 7th edition text, URL |
| **Sentiment Analysis** | 4 | 10 | Q1–Q4 2025: Overall Polarity, Domain Sentiment, CEO/CFO Sentiment, Confidence Index, Subjectivity, Positive/Negative/Forward Term Counts |
| **ML Analysis** | 5 sections | varies | Revenue structural break data, EPS z-scores, technical indicators (RSI, volatility, MAs), 6×6 correlation matrix, leverage trajectory model |
| **Topic Frequency** | 20+ | 6 | 20 keyword clusters across Q1–Q4 2025 by theme (Strategic, Macro, Growth, Financial Structure, Marketing, Technology) with trend descriptions |

**Formatting applied:**
- Column widths auto-sized for all tabs
- Number formats: `#,##0.0` for financials, `0.0%` for margins, `#,##0.00` for EPS, `0.0000` for sentiment scores
- Section headers within ML Analysis tab for clarity
- Methodology notes appended below data in Sentiment and Topic Frequency tabs

---

## 🧲 Interactive Modeling Lab

Four fully interactive simulation modules with real-time computation. Navigate to **Section 16** or click "Modeling Lab" in the sidebar.

### 1. DCF Model Builder

Adjust 6 parameters with sliders — results update instantly:

| Parameter | Range | Default | Sensitivity |
|-----------|-------|---------|-------------|
| Revenue Growth | 0%–15% | 6.4% | High — drives top-line FCF |
| EBITDA Margin | 12%–25% | 18.6% | High — drives profitability |
| WACC | 6%–12% | 8.5% | Very High — discount rate |
| Terminal Growth | 1%–5% | 3.0% | High — terminal value |
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

**Output:** Implied revenue growth rate the market is pricing in, compared to management guidance and consensus estimates. Highlights the gap between market expectations and fundamental projections.

---

## 🧠 Deep Research & ML Insights

### NLP Sentiment Analysis (Section 15A)
- **4 quarters** of earnings call transcripts (Q1–Q4 FY2025) analyzed
- TextBlob polarity scoring + domain-adapted financial lexicon (40+ terms)
- CEO vs CFO sentiment divergence tracking across all 4 calls
- Management confidence index (confidence words vs uncertainty words)
- Prepared remarks vs analyst Q&A sentiment comparison
- Interactive heatmap table with color-coded values

### ML Financial Analysis (Section 15B)
- Revenue structural break detection: pre-acquisition avg $1,230M/qtr vs post-acquisition $1,869M/qtr (+52%)
- Adjusted EPS anomaly detection with z-score bands (±1σ and ±2σ)
- Multi-line margin trajectory: gross, operating, and adjusted EBITDA margins over 10 quarters
- Leverage deleveraging trajectory chart with 2.0–3.0x target range band

### Technical Indicators (Section 15C)
- 39-month price chart with 6M, 12M, and 24M moving average overlays
- RSI-14 gauge display with overbought/oversold zones
- Annualized volatility metric and price-vs-MA comparison table

### Consensus & Valuation (Section 15D)
- Analyst price target football field chart ($83–$115 range, avg $99.67)
- Strong Buy consensus (83.3% bullish, 16.7% neutral, 0% bearish)
- Forward estimates table: FY2026E–FY2028E (Revenue, EPS, EBITDA, FCF)
- Implied CAGR KPI grid (Revenue 5.9%, EPS 37.9%, FCF 21.1%)

### Correlation Matrix (Section 15E)
- Interactive 6×6 heatmap: Revenue, Gross Profit, Op Income, EBITDA, FCF, Adj EBITDA
- Color-coded Pearson coefficients (green ≥0.9, teal ≥0.6, neutral <0.6)

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
| Excel Export | [SheetJS](https://sheetjs.com/) | 0.18.5 | jsdelivr |
| Math Rendering | [MathJax](https://www.mathjax.org/) | 3.x | jsdelivr |
| Fonts | [Google Fonts](https://fonts.google.com/) | Inter, JetBrains Mono | Google |
| Hosting | [AWS Amplify](https://aws.amazon.com/amplify/) | — | — |
| CI/CD | [GitHub Actions](https://github.com/features/actions) | v4 | — |

All libraries are loaded from CDN — **zero npm dependencies, zero build step**.

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
- Use the **sidebar** (left panel) to jump to any of the 17 sections
- Sections are **lazy-loaded** — charts render only when scrolled into view for performance
- On mobile, tap the **hamburger menu** (☰) to open the sidebar
- Active section is highlighted in the sidebar as you scroll

### Exporting — Step by Step

**To export the PDF report:**
1. Click **"Export PDF"** (teal button) in the top navigation bar
2. Wait 2–3 seconds for generation (button shows "Generating...")
3. A 17-page PDF downloads automatically as `SGI_Investment_Research_Report.pdf`
4. The report uses a white background with teal accents — optimized for printing

**To export the slide deck:**
1. Click **"Export Slides"** (gold button) in the top navigation bar
2. Wait 2–3 seconds for generation
3. A 17-slide landscape PDF downloads as `SGI_Investment_Slides_March2026.pdf`
4. Slides use navy headers with white body — ready for projection or screen sharing

**To export the Excel workbook:**
1. Click **"Excel Data"** (green button) in the top navigation bar
2. An XLSX file downloads instantly as `SGI_Financial_Data_2026.xlsx`
3. Open in Excel, Google Sheets, or LibreOffice Calc
4. 13 tabs with formatted column widths and number formatting
5. Sentiment Analysis, ML Analysis, and Topic Frequency tabs contain the Deep Research data

**To export a single section:**
1. Navigate to any section
2. Click the **"Export Section"** button in the section header
3. A landscape PDF screenshot of that section downloads

### Interactive Models — Step by Step

1. Click **"Modeling Lab"** (Section 16) in the sidebar
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
├── index.html              # The entire application (single file, ~436 KB)
│                            # Contains: HTML structure, CSS styles, JavaScript logic,
│                            # chart configurations, export functions, live data engine,
│                            # interactive models, NLP/ML data, and all static content
├── amplify.yml             # AWS Amplify build configuration
│                            # Pre-build: injects AV_API_KEY via sed replacement
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD pipeline
│                            # Triggers on push to main, injects API key, uploads artifact
├── backend.py              # Optional Python Flask backend
│                            # Endpoints: /api/quote, /api/history, /api/peers
│                            # Uses yfinance for real-time data
└── README.md               # This documentation file
```

### Why Single File?

The entire dashboard is a single `index.html` by design:
- **Zero build step** — no webpack, no bundler, no npm install
- **Instant deployment** — upload one file to any web server
- **Offline capable** — works without internet (Tier 5 static data fallback)
- **Portable** — email it, put it on a USB drive, host it anywhere
- **Auditable** — view source, every line of code is transparent
- **No CORS issues** — all CDN libraries are loaded from established CDNs with permissive headers

---

<div align="center">

**Built with data from SEC filings, earnings transcripts, and institutional financial databases.**
**All citations in APA 7th edition format.**

[![Live Dashboard](https://img.shields.io/badge/View_Live_Dashboard-00d4aa?style=for-the-badge&logo=googlechrome&logoColor=white)](https://main.d2bz9s024v2yld.amplifyapp.com/)

</div>
