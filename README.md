# Test Scenarios

Placeholder cashflow samples for three scenario sets (SASH, JAM, Tritility), three variants each.
Every file is synthetic sample data. Counterparties are labels such as `Sample Customer A` and `Sample Employee 01`.
Amounts are small round placeholders. They are not payroll, directors' remuneration, or supplier records, and they do not identify any person or organisation.

Each folder holds two CSVs that reconcile 1:1 (same count and total):

- **`<name> bank statement.csv`** — open-banking-shaped feed: date, account, description, counterparty, money in/out, running balance, category.
- **`<name> Xero.csv`** — matching ledger: date, contact, description, GL account code/name, tax type, money in/out, reconciled flag.

Categories covered in every file: revenue, supplier purchases, a payroll placeholder, a drawings placeholder, tax, capital spend, and an internal transfer.
Account name on every bank row is `Sample Business Account`.

## SASH 1 — placeholder scenario 1

App org slug: `sash-scn-1` · bank rows: 8 · Xero rows: 8

## JAM 1 — placeholder scenario 1

App org slug: `jam-scn-1` · bank rows: 8 · Xero rows: 8

## Tritility 1 — placeholder scenario 1

App org slug: `tritility-scn-1` · bank rows: 8 · Xero rows: 8

## SASH 2 — placeholder scenario 2

App org slug: `sash-scn-2` · bank rows: 8 · Xero rows: 8

## JAM 2 — placeholder scenario 2

App org slug: `jam-scn-2` · bank rows: 8 · Xero rows: 8

## Tritility 2 — placeholder scenario 2

App org slug: `tritility-scn-2` · bank rows: 8 · Xero rows: 8

## SASH 3 — placeholder scenario 3

App org slug: `sash-scn-3` · bank rows: 8 · Xero rows: 8

## JAM 3 — placeholder scenario 3

App org slug: `jam-scn-3` · bank rows: 8 · Xero rows: 8

## Tritility 3 — placeholder scenario 3

App org slug: `tritility-scn-3` · bank rows: 8 · Xero rows: 8

Scenario 1, 2, and 3 use the same contacts and dates. Placeholder magnitudes step with the scenario number (for example revenue in of 1000, 2000, and 3000). The payroll placeholder is 100 and the drawings placeholder is 10 in every file.
