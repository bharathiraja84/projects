# Development plan — AATC AI-VPE

**Operating rule:** Update status, evidence, blockers and next action at the end of every development session. Do not mark tasks complete without evidence. Track substantial work in GitHub Issues/PRs. Status: TODO | IN_PROGRESS | BLOCKED | DONE.

| Phase | Status | Exit criteria | Evidence |
|---|---|---|---|
| 0. Repository scaffold | IN_PROGRESS | Docs, lint, test harness and CI committed | PR + CI run |
| 1. Design baseline | TODO | VPE/President approve roles, policies, SRS and data protection | Signed review record |
| 2. Data and member intake | TODO | Test Sheet schema, test forms, validated import, audit trail | TC IDs and test evidence |
| 3. Deterministic scheduler | TODO | Valid four-week proposals, hard constraints, fairness, no duplicate assignments | Automated tests |
| 4. Confirmation workflow | TODO | Verified identity, allowed transitions, event handling, idempotency | Integration tests |
| 5. Notifications & exception handling | TODO | Invitation/reminder queue, cancel/recovery, nonresponse escalation | Failure-injection tests |
| 6. VPE approval & dashboard | TODO | Review/approve, publish, pause, manual overrides, reports | VPE UAT |
| 7. Pilot & reliability | TODO | Dry run on dummy accounts; backups, access control, release gates passed | Test report |
| 8. Deploy | TODO | Club-owned automation account, clasp configuration, monitoring and rollback | Deployment record |
| 9. AI enhancement | TODO | Advisory-only AI with schema validation, no authority to commit state | AI evaluation report |

## Session log
| Date | Done | Blockers | Next action |
|---|---|---|---|
| 2026-11-10 | Initial repository scaffold proposed | Confirm actual AATC roles, membership counts, privacy consent, Google account | Review SRS and run local tests |

## Decisions pending
- Exact roles and slot counts for AATC weekly/special meetings.
- Who may access members' data; consent and retention periods.
- Club-owned Google account and member identity approach.
- Reminder windows, nonresponse cutoff, escalation owner and emergency fallback.
- Whether public repository is acceptable (never commit actual member information).

## Codex handoff
At the start: read AGENTS.md, this plan, docs/SRS.md and docs/TEST_STRATEGY.md; choose the first unblocked task.
At the end: run tests, document changed files/test evidence, update this plan, and propose a small PR.
