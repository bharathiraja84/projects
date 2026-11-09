# Architecture decision records and unresolved issues

## ADR-001 Single club-owned portal (supersedes standalone VPE tool scope)
Member and ExCom views share authentication and database; VPE module shipped first. A custom public club site requires President/ExCom governance and TMI Brand Team clarification. Avoid creating a separate officer-related site.

## ADR-002 Modular monolith before agents
No independent officer agents initially. Domain workflows are deterministic; optional AI limited to advice and approved club knowledge after access checks.

## ADR-003 Backend selection not final
The earlier Sheets/Forms/Apps Script approach is a viable temporary VPE adapter, but not automatically the full secure multi-user portal backend. Evaluate Firebase/Firestore or another small managed backend for auth, RBAC, query permissions and cost before coding. Do not assert that all services are free forever.

## ADR-004 Copyright and privacy by design
Public official TMI links + club-authored, approved knowledge only. No raw WhatsApp history, protected Toastmasters materials, member data or logos in public GitHub/AI providers.

## ADR-005 WhatsApp is optional and deferred
Use email by default. Meta official WhatsApp 1:1 integration requires opt-in, business eligibility, approved templates, webhook security and a hard budget; do not rely on existing group automation.

## ADR-006 Self-healing boundaries
Retry bounded idempotent operational faults automatically, but any new/changed feature is a PR with tests, governance approval and separate production deployment approval.

## ADR-007 Free-first, long-term maintainability
Prefer hosting and tools with free tiers, but account for billable quotas, data custody, backups, portability and club officer handover. No paid resource without club authorization.
