# ============================================================
#  SGI Dashboard — Makefile
#  Usage: make <target>
# ============================================================

NODE    := node
NPM     := npm
RUNNER  := $(NODE) run_tests.js
REPORT  := QA-REPORT.md

.DEFAULT_GOAL := help

# ── Help ─────────────────────────────────────────────────────────────────────

.PHONY: help
help:
	@echo ""
	@echo "  SGI Dashboard QA — available make targets"
	@echo "  ──────────────────────────────────────────"
	@echo "  make install     Install Node.js dependencies (node-html-parser)"
	@echo "  make test        Run full test suite (verbose)"
	@echo "  make qa          Run full suite + write QA-REPORT.md"
	@echo "  make fast        Run unit tests only (skip live-data)"
	@echo "  make report      Cat the last QA-REPORT.md (no re-run)"
	@echo "  make clean       Remove generated test artifacts"
	@echo ""
	@echo "  Per-module shortcuts:"
	@echo "  make t-html       make t-sections   make t-data"
	@echo "  make t-exports    make t-live"
	@echo ""

# ── Setup ────────────────────────────────────────────────────────────────────

.PHONY: install
install:
	$(NPM) install

# ── Testing ──────────────────────────────────────────────────────────────────

.PHONY: test
test:
	$(RUNNER)

.PHONY: qa
qa:
	$(RUNNER) --out $(REPORT)
	@echo ""
	@echo "  ✅  QA complete. Report → $(REPORT)"

.PHONY: fast
fast:
	$(RUNNER) --fast --out $(REPORT)
	@echo ""
	@echo "  ✅  Fast QA complete (live-data skipped). Report → $(REPORT)"

.PHONY: report
report:
	@cat $(REPORT) 2>/dev/null || echo "No QA-REPORT.md found — run 'make qa' first."

# ── Per-module targets ────────────────────────────────────────────────────────

.PHONY: t-html
t-html:
	$(RUNNER) --module html_structure

.PHONY: t-sections
t-sections:
	$(RUNNER) --module section_coverage

.PHONY: t-data
t-data:
	$(RUNNER) --module financial_values

.PHONY: t-exports
t-exports:
	$(RUNNER) --module export_functions

.PHONY: t-live
t-live:
	$(RUNNER) --module live_data

# ── Cleanup ───────────────────────────────────────────────────────────────────

.PHONY: clean
clean:
	rm -f $(REPORT)
	@echo "  🧹  Cleaned QA artifacts."
