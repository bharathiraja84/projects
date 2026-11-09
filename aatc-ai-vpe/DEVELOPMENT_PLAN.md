# AATC AI Club Portal — Development roadmap
**Owner:** AATC club governance (confirm President + technical steward). **Last updated:** 2026-11-10. **Status:** Draft; no production deployment.

## Principles and workflow
One shared portal, VPE first; maximize free tiers but never compromise identity, data protection, brand compliance or auditability. A feature is DONE only with linked requirement, automated/manual tests and review evidence. Update this file at each coding session; commits and PRs preserve history.

| Stage | Status | Planned deliverables | Exit evidence |
|---|---|---|---|
| 0 — Scaffold | IN_PROGRESS | VS Code/Codex instructions, docs, CI, tests | CI success + PR reviewed |
| 1 — Club and TMI governance | BLOCKED | ExCom approval; club website ownership, official branding review, consent, retention and use of TMI sources | Signed decisions, brand guidance as required |
| 2 — Shared portal foundation | TODO | Responsive portal, member/ExCom RBAC, database and audit, no data leakage | Access-control/security tests |
| 3 — VPE intake and scheduler | TODO | Four-week availability, role constraints, fairness-aware proposal, officer approval | Deterministic acceptance tests |
| 4 — VPE confirmations and recovery | TODO | Verified accept/decline/cancel, reminders, exception escalation, fallback | Fault injection, dry-run, UAT |
| 5 — Core member and ExCom views | TODO | Personal assignments, approved events/winners, membership/attendance/education summaries | Privacy and role-gate UAT |
| 6 — Approved knowledge chatbot | TODO | Curated club knowledge and links to public TMI pages, citation/role filters | Grounding, permission and IP tests |
| 7 — Controlled one-to-one messaging | DEFERRED | Opt-in WhatsApp or email; official API only | Consent, Meta cost/eligibility, webhooks, QA |
| 8 — Self-healing operations | DEFERRED | Heartbeat, reconciliation, alerts, rollback; human-approved feature PRs | Recovery drills, approvals |
| 9 — Additional officer modules | DEFERRED | VPM, VPPR, President, Secretary etc. | Separate change-controlled SRS |

## Stage policy
- Don't build six independent AI agents; AI remains advisory.
- Start with email notifications. WhatsApp groups and WhatsApp chat-history ingestion are NOT MVP dependencies.
- Do not import or scrape member-only Toastmasters material; official membership/Pathways data remains authoritative in TMI systems. Manually approved data imports only with permissions.
- All functional additions use a branch/PR, cost impact, privacy check and tests; production changes require an authorized officer.
- Prefer inexpensive reliable managed services; compare sustained cost, free-tier limits, migration/exit and volunteer maintenance burden before choosing hosting/database.

## Pending club decisions
1. President/ExCom appoint portal owner, administrator and technical successor.
2. Establish whether website is a public club site, a private member portal, or both, and check with brand@toastmasters.org.
3. Confirm logo license/approved artwork and display footer/disclaimer.
4. Consent for member accounts, attendance, awards/photos, educational progress, AI features and communication opt-ins.
5. Data retention/deletion, access by officer role, guest handling and member rights.
6. VPE roles, eligibility, schedule deadlines, escalation and publication rules.
7. Cost ceiling and alerts, official WhatsApp eligibility, ownership of billing.
8. Authorized sources for club/TMI knowledge and secretary reports.

## Session log
| Date | Progress | Next |
|---|---|---|
| 2026-11-10 | Established shared club portal vision; added TMI compliance, privacy, security, cost and validation gates; no live deployment | Obtain club governance and Brand Team decisions; build low-fi prototype with dummy data |

## Codex handoff
Read AGENTS.md, this roadmap, docs/SRS.md, docs/TMI_COMPLIANCE.md and docs/TEST_STRATEGY.md. Implement only the first unblocked phase. Finish with tests, traceability, documentation, and PR; don't activate real notifications.
