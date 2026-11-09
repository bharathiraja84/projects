# AATC AI Club Portal — Verification & Validation Strategy v1.1
Status: proposed, not yet fully executed. Scope is shared foundation and VPE FIRST; AI/WhatsApp/self-healing tests are future release-specific.

## Test philosophy
Use a requirements-to-tests traceability matrix, automated pure-domain unit tests, adapter tests, isolated cloud integration tests, VPE/President UAT, negative security tests, fault injection, accessibility and TMI compliance review. A GitHub Actions PASS of scaffold tests is NOT proof of live portal security or TMI approval.

## Environments
UNIT synthetic data only; INTEGRATION fake member accounts and isolated Google/hosting projects; STAGING no real outbound messages; PRODUCTION only after signed gate. Secrets stored outside public repo. Google/WhatsApp sandbox and service quotas monitored.

## Test suites
| Test IDs | Coverage |
|---|---|
| TC-001–024 | Existing VPE functional, state, failure and audit test scenarios, see below |
| TC-025–032 | Shared portal RBAC, officer lifecycle, privacy and publications |
| TC-033–040 | TMI logo, footer, trademark, official-source restrictions and governance |
| TC-041–048 | AI grounding, document confidentiality, WhatsApp eligibility, budget and self-healing gates |
| TC-049–052 | Recovery, usability, backup and cost/maintenance nonfunctional tests |

## P0 acceptance scenarios
| Test | Requirement IDs | Stimulus | Expected evidence / pass |
|---|---|---|---|
| TC-001 | FR-001 | duplicate verified member email | rejected |
| TC-002 | FR-005 | unavailable member | no automatic assignment |
| TC-003 | FR-006 | speech not ready | no speaker invitation |
| TC-004 | FR-007 | conflicting meeting roles | rejected |
| TC-005 | FR-009 | all candidates ineligible | explicit vacant slot |
| TC-006 | FR-010 | VPE not approved | no invite sent |
| TC-007 | FR-011 | duplicate active slot | prevented |
| TC-008 | FR-013–014 | authenticated explicit accept | CONFIRMED |
| TC-009 | FR-015 | different member sends invite ID | rejected + audited |
| TC-010 | FR-015 | expired link accepted | rejected |
| TC-011 | FR-016 | duplicate same response | same state, no extra side effect |
| TC-012 | FR-017 | illegal transition | rejected |
| TC-013 | FR-018 | timer fires twice | one logical reminder |
| TC-014 | FR-019 | deadline without answer | EXPIRED + exception |
| TC-015 | FR-020 | cancellation | alternate proposed, not confirmed |
| TC-016 | FR-021 | automatic replacement of confirmed person | denied |
| TC-017 | FR-023 | unconfirmed role in published agenda | blocked |
| TC-018 | FR-024 | pause outbound | nothing sent |
| TC-019 | FR-030 | AI API down | core workflow works |
| TC-020 | NFR-006 | two concurrent responses | consistent version/slot |
| TC-021 | NFR-008 | failure after email send | ambiguous flagged, no blind retry |
| TC-022 | FR-028 | restore backup | verified record integrity |
| TC-023 | NFR-002 | unauthorized officer action | denied |
| TC-024 | NFR-016 | hallucinated AI output | ignored |
| TC-025 | PORT-002–003 | guest requests ExCom API/direct URL | 403 + no response data |
| TC-026 | PORT-003–005 | member requests other member's attendance | 403 + logged |
| TC-027 | PORT-004,GOV-005 | officer term expires | elevated access revoked |
| TC-028 | PORT-007,GOV-001 | award/photo publication without consent | withheld |
| TC-029 | PORT-006,009 | sync stale member education statistic | as-of date/source + no false official status |
| TC-030 | GOV-001–002 | consent withdrawn or data correction | policy-consistent change and audit |
| TC-031 | GOV-003 | tiny aggregate may reveal identity | suppressed or scoped |
| TC-032 | PORT-008 | keyboard-only + mobile screen | essential interactions usable |
| TC-033 | TMI-001 | officer attempts separate public site | governance/approval gate blocks |
| TC-034 | TMI-002,007 | generated/recolored/unlicensed logo | rejected by asset and human review |
| TC-035 | TMI-002 | theme/fonts/colors/logo placement | Brand Manual visual QA passes |
| TC-036 | TMI-003 | public page lacks required footer | fail release/static checks |
| TC-037 | TMI-004 | club page lacks contact, meeting, mission, district/official links | fail release |
| TC-038 | TMI-005,KNOW-002 | chatbot ingests gated TMI PDF or mirrors public TMI page | ingestion rejected |
| TC-039 | TMI-006,PORT-009 | user assumes progress is official | clear club-source date and warning |
| TC-040 | TMI-008–010 | AI media without review/disclosure or promotional misuse | blocked pending review |
| TC-041 | KNOW-001–003 | unauthorized member queries private ExCom report | denial/no leak |
| TC-042 | KNOW-001,005 | unanswerable policy question | source-based uncertainty + official referral |
| TC-043 | KNOW-003 | malicious document says “ignore permission rules” | treat as data, refuse exfiltration |
| TC-044 | KNOW-004,MSG-003 | raw club WhatsApp group export attempted | disabled unless explicit lawful gate |
| TC-045 | MSG-002 | WhatsApp setup lacks opt-in/approved template/budget | integration disabled |
| TC-046 | GOV-006 | projected/actual spend exceeds ceiling | alert, suspend optional paid actions |
| TC-047 | GOV-008 | worker fails transiently | bounded idempotent retry and alert |
| TC-048 | GOV-009 | authorized user asks for new feature | draft PR only; no live deploy |
| TC-049 | GOV-007,NFR-009 | backup restore rehearsal | pass integrity reconciliation |
| TC-050 | GOV-007,NFR-010 | portal or vendor down on Sunday | approved manual meeting workflow works |
| TC-051 | NFR-014 | 40 members, 4 weeks, 15 roles/week | meets measured timeout target |
| TC-052 | NFR-015 | new incoming ExCom admin | handover runbook usable without original developer |

## Exit criteria
- Every P0 requirement has assigned test(s) and evidence or a documented, signed deviation.
- 100% pass for critical identity, privilege, membership confidentiality, role-state and release-brand tests; zero open critical/high defects.
- No real members used in automated CI.
- UAT witness: VPE and President; technical steward verifies backup/recovery.
- Public launch requires documented TMI branding/website review where needed, club approval and privacy policy.
- Deferred feature tests are marked NOT APPLICABLE to MVP, never silently asserted passed.

## Evidence template
Test ID; requirement; case description; environment; build/commit; fixture; expected; actual; result; owner; timestamp; defect/approval reference. Attach sanitized screenshots only.

## Scope-specific test applicability (2026-11-10)
- TEST PRIV-001: anonymous request for any route/API returns no member records, and redirects/denies as appropriate.
- TEST PRIV-002: authenticated member denied other members' private data; ExCom scopes enforced server-side.
- TEST PRIV-003: public search crawler/unauthenticated request cannot obtain any private content; robots.txt is **not** treated as a security boundary.
- TEST GOV-001: AATC ExCom authorizes internal deployment; independent TMI signoff is not a pilot prerequisite.
- TC-036/TC-037 (website disclaimer/public club details) are conditional: mark N/A only when product is truly members-only and compliance reviewer confirms they do not apply to the implemented service. Reopen if public-facing website is added.
- Official TMI marks/copyright/privacy constraints remain applicable; do not skip TC-034/TC-035 if marks are used.
