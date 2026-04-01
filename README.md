<![CDATA[<div align="center">

# 🟢 Somnigroup International (NYSE: SGI)

### Interactive Investment Research Dashboard

[![Deploy](https://img.shields.io/badge/AWS_Amplify-Live-00d4aa?style=for-the-badge&logo=awsamplify&logoColor=white)](https://main.d2bz9s024v2yld.amplifyapp.com/)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![Chart.js](https://img.shields.io/badge/Charts-Chart.js_4.4-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)
[![jsPDF](https://img.shields.io/badge/Export-jsPDF_2.5-F7DF1E?style=for-the-badge)](https://github.com/parallax/jsPDF)
[![SheetJS](https://img.shields.io/badge/Excel-SheetJS-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white)](https://sheetjs.com/)

**A single-file, zero-build, institutional-grade equity research platform**
**41 interactive charts · 17 analytical sections · 3 export formats · Live market data**

[**View Live Dashboard →**](https://main.d2bz9s024v2yld.amplifyapp.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Dashboard Sections](#-dashboard-sections-17)
- [Live Data Architecture](#-live-data-architecture)
- [Export Capabilities](#-export-capabilities)
- [Interactive Modeling Lab](#-interactive-modeling-lab)
- [Deep Research & ML](#-deep-research--ml-insights)
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

---

## ✨ Features

### 📊 Visualization & Analysis
- **41 interactive charts** — bar, line, radar, scatter, doughnut, waterfall, combo, heatmap
- **Financial modeling** — DCF, comparables, sum-of-parts, Monte Carlo simulation
- **Quantitative risk analytics** — DuPont decomposition, Altman Z-Score, Piotroski F-Score, ROIC/EVA
- **Peer comparison** — multi-dimensional radar charts and scatter plots vs SNBR, PRPL, LZB, LEG
- **NLP sentiment analysis** — TextBlob polarity scoring across 4 quarters of earnings transcripts
- **ML trend detection** — EPS anomaly detection, revenue structural breaks, margin trajectory modeling

### 🔄 Live Market Data (5-Tier Fallback)
- **Tier 1:** Python Flask backend (localhost:5001, optional)
- **Tier 2:** Yahoo Finance via CORS proxies (real-time, free)
- **Tier 3:** Alpha Vantage API (CORS-native, 25 req/day free tier)
- **Tier 4:** In-memory session cache (last successful fetch)
- **Tier 5:** Static HTML data (always available, never blank)

### 📥 Three Export Formats
- **PDF Report** — 17-page A4 programmatic report via jsPDF
- **PDF Slides** — 17-slide landscape presentation via jsPDF
- **Excel Workbook** — 13-tab XLSX with formatted data via SheetJS

### 🎨 Design & UX
- **Light/Dark theme** toggle (light default)
- **Mobile responsive** — tablet (1100px), mobile (768px), small mobile (480px)
- **Hamburger menu** on mobile with collapsible sidebar
- **Lazy-loaded charts** via IntersectionObserver (renders only when scrolled into view)
- **MathJax equations** for financial formulas (WACC, DCF, Z-Score)

---

## 📑 Dashboard Sections (17)

| # | Section | Description | Charts |
|---|---------|-------------|--------|
| **01** | 🔷 Executive Summary | KPI grid, stock chart, upside drivers, investment pillars | 2 |
| **02** | 🏢 Company Overview | Business description, brand portfolio, M&A timeline | — |
| **03** | 📊 Industry Analysis | TAM breakdown, CAGR comparison, Porter's Five Forces | 3 |
| **04** | 💹 Financial Performance | Revenue waterfall, EBITDA trends, margins, quarterly combo | 4 |
| **05** | 🔧 Segment Analysis | Channel mix, geographic revenue, segment OI | 3 |
| **06** | ⚖️ Balance Sheet & CF | Leverage trajectory, FCF bridge, capital allocation | 3 |
| **07** | 🎯 Valuation & DCF | Football field chart, sensitivity heatmap, DCF model | 2 |
| **08** | ⚡ Catalysts & Risks | Synergy timeline, risk matrix scatter plot | 2 |
| **09** | 🔍 Peer Comparison | Radar chart, P/E comparison, growth-margin scatter | 3 |
| **10** | 📈 Analyst Consensus | Rating distribution, earnings surprise, EPS estimates | 3 |
| **11** | 📝 Investment Case | Three investment pillars with supporting evidence | — |
| **12** | 📐 Quant Risk Analytics | Return distribution, ROIC vs WACC, correlation matrix | 2+ |
| **13** | 🔬 Advanced Valuation | Valuation bridge, Monte Carlo histogram | 2 |
| **14** | 🤖 ML Predictions | Price prediction simulator with sensitivity/feature importance | 2 |
| **15** | 🧠 Deep Research & ML | NLP sentiment, financial ML, technicals, consensus, correlations | 12 |
| **16** | 🧲 Modeling Lab | Interactive DCF, leverage simulator, M&A modeler, reverse DCF | 4 modules |
| **17** | 📚 References | APA 7th edition formatted citations | — |

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

When live data is received, `propagateLivePrice()` updates **all** computed elements across the dashboard: valuation metrics, ML predictions, scenario models, charts, and KPI cards.

---

## 📥 Export Capabilities

### 📄 PDF Research Report (17 pages)
| Page | Content |
|------|---------|
| 1 | Cover page with price target and recommendation |
| 2 | Executive summary with KPI grid and investment pillars |
| 3 | Company overview and brand portfolio |
| 4 | Industry analysis and TAM sizing |
| 5 | Financial performance tables (5-year history) |
| 6 | Key financial ratios and trends |
| 7 | Segment analysis with operating margins |
| 8 | Balance sheet, leverage, and cash flow |
| 9 | Valuation summary (DCF, comps, SOTP) |
| 10 | Catalysts and growth drivers |
| 11 | Risk assessment and mitigants |
| 12 | Peer comparison table |
| 13 | Analyst consensus and price targets |
| 14 | Quantitative risk metrics |
| 15 | **Deep Research: Sentiment & ML Analysis** |
| 16 | **Deep Research: Technical & Consensus** |
| 17 | Disclaimer and APA 7th edition references |

### 📑 PDF Slide Deck (17 slides)
Landscape-format presentation covering all major analytical sections plus two dedicated Deep Research slides with NLP sentiment findings and ML quantitative signals.

### 📊 Excel Workbook (13 tabs)
| Tab | Contents |
|-----|----------|
| Income Statement | FY2021–FY2028E with revenue, margins, EPS |
| Balance Sheet | Assets, liabilities, equity, debt metrics |
| Cash Flow | OCF, CapEx, FCF, dividends, buybacks |
| Quarterly | 10 quarters (Q3 2023–Q4 2025) with 11 metrics each |
| Ratios | Margins, returns, leverage, coverage ratios |
| Segments | Revenue and OI by segment |
| Estimates | Consensus FY2026E–FY2028E |
| Peer Comparison | SGI vs 4 peers across 10 metrics |
| Valuation | 6 methodologies with low/base/high ranges |
| References | APA 7th edition citations with URLs |
| **Sentiment Analysis** | NLP polarity, domain sentiment, CEO/CFO scores |
| **ML Analysis** | Revenue trends, EPS anomalies, technicals, correlations |
| **Topic Frequency** | 20 keyword clusters across Q1–Q4 2025 |

---

## 🧲 Interactive Modeling Lab

Four fully interactive simulation modules with real-time computation:

### 1. DCF Model Builder
- 6 adjustable parameters: revenue growth, EBITDA margin, WACC, terminal growth rate, tax rate, CapEx/revenue
- Real-time implied share price and upside/downside calculation
- Sensitivity to each input displayed dynamically

### 2. Leverage Scenario Simulator
- Adjust EBITDA growth, interest rate, debt paydown rate, dividend payout
- Projects 5-year leverage trajectory (Net Debt/EBITDA)
- Shows year-by-year EPS impact and total shareholder return

### 3. M&A Accretion/Dilution Modeler
- Model hypothetical acquisitions with target revenue, margins, purchase price
- Calculates EPS accretion/dilution and pro-forma leverage
- Adjustable synergy assumptions and financing mix

### 4. Reverse DCF Calculator
- Input current market price to solve for implied growth rate
- Compare market-implied assumptions vs management guidance
- Gap analysis between implied and consensus expectations

---

## 🧠 Deep Research & ML Insights

### NLP Sentiment Analysis
- **4 quarters** of earnings call transcripts (Q1–Q4 FY2025) analyzed
- TextBlob polarity scoring + domain-adapted financial lexicon (40+ terms)
- CEO vs CFO sentiment divergence tracking
- Management confidence index and subjectivity trends
- Topic frequency analysis: synergy, tariff, Mattress Firm, innovation mentions

### ML Financial Analysis
- Revenue structural break detection (pre vs post-acquisition)
- Adjusted EPS anomaly detection with z-score bands
- Margin trajectory modeling (gross, operating, adjusted EBITDA)
- Leverage deleveraging trajectory with target range visualization

### Technical Indicators
- 39-month price history with 6M/12M/24M moving averages
- RSI-14 gauge and annualized volatility metrics
- Price vs moving average trend signals

### Consensus & Valuation
- Analyst price target football field visualization ($83–$115 range)
- Forward estimates through FY2028 (Revenue, EPS, EBITDA, FCF)
- Implied CAGR metrics display

### Correlation Matrix
- Interactive 6×6 heatmap: Revenue, Gross Profit, Op Income, EBITDA, FCF, Adj EBITDA

---

## 🛠 Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Charts | [Chart.js](https://www.chartjs.org/) | 4.4.0 |
| PDF Export | [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 |
| Screenshots | [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 |
| Excel Export | [SheetJS](https://sheetjs.com/) | 0.18.5 |
| Math Rendering | [MathJax](https://www.mathjax.org/) | 3.x |
| Fonts | [Google Fonts](https://fonts.google.com/) | Inter, JetBrains Mono |
| Hosting | [AWS Amplify](https://aws.amazon.com/amplify/) | — |
| CI/CD | [GitHub Actions](https://github.com/features/actions) | v4 |

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

### Option 3: Any Static Host

Upload `index.html` to any static hosting provider:
- **Netlify**: Drag and drop the file
- **Vercel**: `vercel --single-file index.html`
- **GitHub Pages**: Enable Pages on the repo
- **S3 + CloudFront**: Upload to S3 bucket with static hosting

---

## ⚙️ Configuration

### Alpha Vantage API Key

The dashboard uses Alpha Vantage as a Tier 3 data source. To enable it:

1. Get a free API key at [alphavantage.co](https://www.alphavantage.co/support/#api-key)
2. **For Amplify**: Add `AV_API_KEY` as an environment variable in the Amplify Console
3. **For GitHub Actions**: Add `AV_API_KEY` as a repository secret
4. **For local dev**: Replace `__AV_API_KEY__` in `index.html` with your key, or leave it — the dashboard uses Yahoo Finance (Tier 2) as the primary free data source

### Optional Python Backend (Tier 1)

For highest-fidelity real-time data via yfinance:

```bash
pip install flask flask-cors yfinance
python backend.py
```

The backend runs on `localhost:5001` and provides real-time quotes, historical data, and peer comparisons. The dashboard auto-detects it and uses it as the primary data source when available.

### Theme Configuration

The dashboard defaults to **light theme**. Users can toggle dark mode via the button in the top navigation bar. The theme preference persists in the current session.

---

## 📖 Usage Guide

### Navigation
- Use the **sidebar** (left panel) to jump to any of the 17 sections
- Sections are **lazy-loaded** — charts render only when scrolled into view for performance
- On mobile, tap the **hamburger menu** (☰) to open the sidebar

### Exporting Data
| Button | Output | Details |
|--------|--------|---------|
| **Export PDF** | `SGI_Investment_Research_Report.pdf` | 17-page A4 portrait report |
| **Export Slides** | `SGI_Investment_Slides_March2026.pdf` | 17-slide landscape deck |
| **Excel Data** | `SGI_Financial_Data_2026.xlsx` | 13-tab formatted workbook |
| **Export Section** | `SGI_{section}.pdf` | Individual section screenshot |

### Interactive Models
1. Navigate to **Section 16: Modeling Lab**
2. Use the **sliders** to adjust assumptions in real-time
3. Results update instantly — no "calculate" button needed
4. Each module operates independently

### Live Data
- The dashboard auto-fetches live SGI stock price on load
- **"Static Data"** indicator in the top bar shows when using cached data
- **"Live"** indicator shows when real-time data is active
- Timestamp of latest data update is shown in the header

---

## 📁 Project Structure

```
somnigroup/
├── index.html              # The entire application (single file, ~436 KB)
├── amplify.yml             # AWS Amplify build configuration
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD pipeline
├── backend.py              # Optional Python Flask backend (yfinance)
└── README.md               # This file
```

### Why Single File?

The entire dashboard is a single `index.html` by design:
- **Zero build step** — no webpack, no bundler, no npm
- **Instant deployment** — upload one file anywhere
- **Offline capable** — works without internet (static data fallback)
- **Portable** — email it, put it on a USB drive, host it anywhere
- **Auditable** — view source, everything is transparent

---

<div align="center">

**Built with data from SEC filings, earnings transcripts, and institutional financial databases.**

[![Live Dashboard](https://img.shields.io/badge/View_Live_Dashboard-00d4aa?style=for-the-badge&logo=googlechrome&logoColor=white)](https://main.d2bz9s024v2yld.amplifyapp.com/)

</div>
]]>