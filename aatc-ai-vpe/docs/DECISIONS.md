# Architectural decision records
## ADR-001 — GitHub monorepo folder
**Decision:** Keep project under `aatc-ai-vpe/` inside existing `projects` repo. **Rationale:** avoid interfering with other projects.
## ADR-002 — Sheets + Forms + Apps Script
**Decision:** Low-cost starter platform. **Tradeoff:** Sheets not transactional; engineer locks, versions, outbox, reconciliation.
## ADR-003 — Deterministic authority, optional AI
**Decision:** AI is advisory; business logic controls assignment and permissions.
## ADR-004 — Public repository and member privacy
**Decision:** No actual member data, credentials, Google IDs or live exports in the public repository.
## ADR-005 — Pilot-first deployment
**Decision:** Manual approval for live messaging and production launch; isolated dummy test environment first.
