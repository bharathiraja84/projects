# Validation & Verification Strategy (draft)
## Purpose
Demonstrate that scheduling, identity, confirmations, notifications and cancellation handling are correct and recoverable. Unit tests are not sufficient proof of a deployed Apps Script integration.
## Levels
1. Unit: pure state machine, eligibility, ranking, calendar logic.
2. Component: Sheets/Form/Mail adapters mocked; schema and input validation.
3. Integration: dedicated dummy Google Sheets/Forms/Apps Script deployment.
4. End-to-end: dry-run invitations to controlled accounts.
5. UAT: VPE/TMOD simulate a Sunday meeting and recover from exceptions.
6. Fault injection/security: trigger replay, simultaneous submits, quota exhaustion, invalid AI JSON, permission denial, stale links, Sheet unavailable.
## Release gates
- 100% pass of high/critical identity, state, eligibility, audit, recovery test cases.
- 0 unresolved critical/high defects.
- Evidence-backed full requirements traceability; gaps formally accepted.
- Manual fallback and restore rehearsal witnessed.
- VPE + club President approve a controlled pilot before production.
## Test scenarios
| Test | Linked requirement | Scenario | Expected result |
|---|---|---|---|
| TC-001 | FR-001 | duplicate active email | rejected |
| TC-002 | FR-005 | unavailable person | not proposed |
| TC-003 | FR-006 | unready speaker | not proposed |
| TC-004 | FR-007 | second conflicting role | rejected |
| TC-005 | FR-009 | no viable candidate | vacancy + explanation |
| TC-006 | FR-010 | proposal without approval | no email |
| TC-007 | FR-011 | duplicate active slot | prevented |
| TC-008 | FR-013,014 | verified explicit acceptance | CONFIRMED |
| TC-009 | FR-015 | wrong member responds | rejected and audited |
| TC-010 | FR-015 | expired invite accepted | rejected |
| TC-011 | FR-016 | duplicate response | no duplicated event/state change |
| TC-012 | FR-017 | illegal transition | rejected |
| TC-013 | FR-018 | duplicate reminder scheduler run | one logical reminder |
| TC-014 | FR-019 | nonresponse at deadline | EXPIRED + exception |
| TC-015 | FR-020 | cancellation | alternate suggested, not confirmed |
| TC-016 | FR-021 | proposed swap of confirmed member | rejected without consent/override |
| TC-017 | FR-023 | draft agenda including unconfirmed slot | not published |
| TC-018 | FR-024 | notification pause | nothing sent |
| TC-019 | FR-030 | AI unavailable | core workflow succeeds |
| TC-020 | NFR-006 | simultaneous submissions | one valid state transition |
| TC-021 | NFR-008 | crash after send | AMBIGUOUS, manual reconciliation |
| TC-022 | NFR-009 | restore backup | reconciled record counts and versions |
| TC-023 | NFR-002 | unauthorized admin action | denied |
| TC-024 | NFR-016 | AI hallucinated eligibility | discarded |
## Evidence
Capture test ID, code revision, fixture version, environment, result, timestamp, responsible reviewer, defects. Keep dummy data only in the repository.
