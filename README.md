# Test Scenarios

Mocked Cashew orgs for testing cashflow signals. **9 orgs** = 3 businesses × 3 sets.
Each set uses the SAME scenario *types* per business with different counterparties and
magnitudes. All data is synthetic/derived from design-partner statements — do not share.

Each folder holds two CSVs that reconcile 1:1 (same count and total):
- **`<name> bank statement.csv`** — the open-banking feed (Monzo): date, account,
  description, counterparty, money in/out, running balance, Cashew category.
- **`<name> Xero.csv`** — the matching Xero reconciled bank ledger: date, contact,
  description, GL account code/name (Xero Demo Company chart of accounts), tax type,
  money in/out, reconciled flag.

Scenario months are the current month; base history is shifted so the prior 3 months
carry a baseline. Amounts in GBP.

## SASH 1 — SASH FOODS LTD — Scenario 1
App org slug: `sash-scn-1` · bank rows: 2916 · Xero rows: 2916

  - **Expense spike (supplier COGS ~+65%)** — `suppliers_cogs` via *SCN Bulk Ingredients Co*: -£10,000 across 10 txn(s) in the current month
  - **Revenue dip (top platform ~-50%)** — `revenue` via *SCN Delivery Platform*: +£11,000 across 4 txn(s) in the current month
  - **Cash shortfall (one-off capex)** — `capital_expenditure` via *SCN Commercial Kitchen Ltd*: -£15,000 across 1 txn(s) in the current month
  - **VAT pot** — underfunded at ~40% coverage (manual estimate)

## JAM 1 — JAM Ltd — Scenario 1
App org slug: `jam-scn-1` · bank rows: 436 · Xero rows: 436

  - **VAT liability due (unfunded — no VAT pot)** — `tax_vat` via *HMRC VAT*: -£45,000 across 1 txn(s) in the current month
  - **Supplier cost creep (rising 4 months)** — `suppliers_cogs` via *SCN Rising Logistics Supplier*: -£59,000 across 4 txn(s) in the current month
  - **Dividend surge (large drawdown)** — `directors_drawings` via *SCN Director Dividend*: -£80,000 across 1 txn(s) in the current month
  - **Baseline revenue continuation (~prior-3mo avg)** — `revenue` via *SCN Regular Customers*: +£35,700 across 3 txn(s) in the current month
  - **VAT pot** — underfunded at ~65% coverage (avg of recent VAT payments)

## Tritility 1 — Tritility Ltd — Scenario 1
App org slug: `tritility-scn-1` · bank rows: 5707 · Xero rows: 5707

  - **Payroll spike (~+42% vs product baseline)** — `payroll` via *SCN New Hires Payroll*: -£420,000 across 10 txn(s) in the current month
  - **Major customer loss (revenue ~-50%)** — `revenue` via *SCN Retained Customers*: +£45,000 across 3 txn(s) in the current month
  - **VAT liability spike** — `tax_vat` via *HMRC VAT*: -£600,000 across 1 txn(s) in the current month
  - **VAT pot** — funded at ~115% coverage (avg of recent VAT payments)

## SASH 2 — SASH FOODS LTD — Scenario 2
App org slug: `sash-scn-2` · bank rows: 2914 · Xero rows: 2914

  - **Expense spike (~+52%)** — `suppliers_cogs` via *SCN Wholesale Produce Ltd*: -£9,200 across 8 txn(s) in the current month
  - **Revenue dip (~-35%)** — `revenue` via *SCN Marketplace Payouts*: +£14,800 across 4 txn(s) in the current month
  - **Cash shortfall (one-off repair)** — `capital_expenditure` via *SCN Refrigeration Services*: -£9,500 across 1 txn(s) in the current month
  - **VAT pot** — underfunded at ~30% coverage (manual estimate)

## JAM 2 — JAM Ltd — Scenario 2
App org slug: `jam-scn-2` · bank rows: 436 · Xero rows: 436

  - **VAT liability due** — `tax_vat` via *HMRC VAT*: -£38,000 across 1 txn(s) in the current month
  - **Supplier cost creep (+£4k/mo)** — `suppliers_cogs` via *SCN Freight Partners*: -£52,000 across 4 txn(s) in the current month
  - **Dividend surge (~+176%)** — `directors_drawings` via *SCN Director Dividend*: -£55,000 across 1 txn(s) in the current month
  - **Baseline revenue continuation** — `revenue` via *SCN Regular Customers*: +£35,700 across 3 txn(s) in the current month
  - **VAT pot** — underfunded at ~80% coverage (avg of recent VAT payments)

## Tritility 2 — Tritility Ltd — Scenario 2
App org slug: `tritility-scn-2` · bank rows: 5705 · Xero rows: 5705

  - **Payroll spike (~+22%)** — `payroll` via *SCN New Hires Payroll*: -£360,000 across 8 txn(s) in the current month
  - **Customer loss (revenue ~-36%)** — `revenue` via *SCN Retained Customers*: +£60,000 across 3 txn(s) in the current month
  - **VAT liability spike** — `tax_vat` via *HMRC VAT*: -£750,000 across 1 txn(s) in the current month
  - **VAT pot** — underfunded at ~90% coverage (avg of recent VAT payments)

## SASH 3 — SASH FOODS LTD — Scenario 3
App org slug: `sash-scn-3` · bank rows: 2918 · Xero rows: 2918

  - **Expense spike (~+89%)** — `suppliers_cogs` via *SCN Catering Supplies Direct*: -£11,400 across 12 txn(s) in the current month
  - **Revenue dip (~-70%)** — `revenue` via *SCN Food Delivery Platform*: +£6,800 across 4 txn(s) in the current month
  - **Cash shortfall (shopfit)** — `capital_expenditure` via *SCN Shopfit Contractors*: -£22,000 across 1 txn(s) in the current month
  - **VAT pot** — underfunded at ~55% coverage (manual estimate)

## JAM 3 — JAM Ltd — Scenario 3
App org slug: `jam-scn-3` · bank rows: 436 · Xero rows: 436

  - **VAT liability due** — `tax_vat` via *HMRC VAT*: -£52,000 across 1 txn(s) in the current month
  - **Supplier cost creep (+£5k/mo)** — `suppliers_cogs` via *SCN Packaging Suppliers*: -£48,000 across 4 txn(s) in the current month
  - **Dividend surge (~+501%)** — `directors_drawings` via *SCN Director Dividend*: -£120,000 across 1 txn(s) in the current month
  - **Baseline revenue continuation** — `revenue` via *SCN Regular Customers*: +£35,700 across 3 txn(s) in the current month
  - **VAT pot** — underfunded at ~25% coverage (avg of recent VAT payments)

## Tritility 3 — Tritility Ltd — Scenario 3
App org slug: `tritility-scn-3` · bank rows: 5707 · Xero rows: 5707

  - **Payroll spike (~+36%)** — `payroll` via *SCN New Hires Payroll*: -£400,000 across 10 txn(s) in the current month
  - **Customer loss (revenue ~-73%)** — `revenue` via *SCN Retained Customers*: +£25,000 across 3 txn(s) in the current month
  - **VAT liability spike** — `tax_vat` via *HMRC VAT*: -£700,000 across 1 txn(s) in the current month
  - **VAT pot** — funded at ~130% coverage (avg of recent VAT payments)
