# Software Requirements Specification — AATC AI-VPE
Version 1.0 draft; status: NOT APPROVED. Scope: weekly club scheduling/confirmation (Sunday 10:00–12:00 IST). The formal 13-page SRS discussed in the project planning conversation should be reviewed against this developer-oriented baseline; do not claim this Markdown is a verbatim conversion.

## Actors
MEMBER, VPE, AUTHORIZED_OFFICER (e.g. President/TMOD when delegated), AUTOMATION, AI_ADVISOR.
## Functional requirements
| ID | Requirement / verifiable acceptance criterion |
|---|---|
| FR-001 | Maintain unique active member ID, verified email, status, role preferences and consent; reject duplicates. |
| FR-002 | Maintain configurable role definitions, slots, eligibility, exclusions and role incompatibilities. |
| FR-003 | Generate a four-week club-local meeting calendar; support holidays, special meetings and cancellations. |
| FR-004 | Record each member's per-meeting availability as AVAILABLE, MAYBE, UNAVAILABLE or UNKNOWN. |
| FR-005 | Only available, active, eligible, nonconflicting members qualify for automatic proposals. |
| FR-006 | Prepared speech proposals require recorded speech readiness. |
| FR-007 | Respect maximum roles per member per meeting, configured by the club. |
| FR-008 | Score eligible candidates with configurable fairness, education and preference weights. |
| FR-009 | Find a conflict-free set of proposals; leave unfillable slots vacant with explanation. |
| FR-010 | Require VPE/authorized-officer approval before sending initial invitations. |
| FR-011 | Create unique immutable assignment IDs and one active ownership record per slot. |
| FR-012 | Send invitations via authorized outbox; store due date and provider send-attempt outcome. |
| FR-013 | Collect explicit accept/decline/cancel choices through identity-verified responses. |
| FR-014 | Confirm only when invite active, unexpired, member matches, and no conflicting assignment. |
| FR-015 | Reject stale, forged, ineligible and unauthorized decisions without changing the schedule. |
| FR-016 | Handle duplicate identical submissions idempotently. |
| FR-017 | Execute only allowed state transitions with event audit and optimistic version checks. |
| FR-018 | Send no more than one instance of each scheduled reminder event; honor opt-out rules. |
| FR-019 | Expire unanswered invitations after configured cutoff; report exception. |
| FR-020 | Suggest alternates on decline, expiry or cancellation without auto-confirming them. |
| FR-021 | Protect confirmed assignments; cancellation or authorized, audited override required to replace. |
| FR-022 | Queue officer digest for vacancies, cancellations, missing confirmations, and delivery failures. |
| FR-023 | Produce agenda only from validated active assignments; publication requires officer approval. |
| FR-024 | Permit pause/resume of outbound workflows without losing pending work. |
| FR-025 | Record roles actually performed separately from planned assignments. |
| FR-026 | Compute participation coverage, fairness, response-time and manual-intervention metrics. |
| FR-027 | Expose member-accessible correction path and officer-controlled record amendments. |
| FR-028 | Back up, reconcile and restore operational data with documented verification. |
| FR-029 | Produce AI recommendations and drafted text only, with output schema validation. |
| FR-030 | Continue deterministic scheduling and confirmation when AI service is unavailable. |

## Nonfunctional requirements
| ID | Requirement / test gate |
|---|---|
| NFR-001 | Authentication: verified account identity for member actions. |
| NFR-002 | Authorization: least-privilege controls for officer-only edits. |
| NFR-003 | Privacy: minimize PII, require consent and enforce agreed retention policy. |
| NFR-004 | Secrets never stored in repo, Sheets or client responses. |
| NFR-005 | Audit: append durable timestamp, actor, reason, entity, version and old/new state. |
| NFR-006 | Concurrency: no lost updates under simultaneous submit/trigger execution. |
| NFR-007 | Idempotency: repeated trigger event never creates a duplicate active invitation. |
| NFR-008 | Recovery: ambiguous send outcomes flagged, not silently retried. |
| NFR-009 | Backup and restoration drill required before pilot release. |
| NFR-010 | Graceful degradation: manual agenda process available if script/API fails. |
| NFR-011 | Observability: daily job heartbeat, failure notifications and basic event counts. |
| NFR-012 | Timezone: DST-safe clock representation; AATC display in Asia/Kolkata. |
| NFR-013 | Availability: target to be set after pilot; never promise cloud SLA beyond Google's services. |
| NFR-014 | Performance: 40 members / four weeks / 15 role slots per meeting without Apps Script timeout in a representative test. |
| NFR-015 | Maintainability: independent domain rules, adapter tests, readable docs and reproducible scripts. |
| NFR-016 | AI safety: advisory-only, structured JSON, untrusted input treated as data, fallback on failure. |

## Assignment state machine
PROPOSED → INVITED → CONFIRMED / DECLINED / EXPIRED; CONFIRMED → CANCELLED or COMPLETED (after meeting); replaced slot gets a NEW assignment ID. Do not mark EXPIRED until cutoff. Never convert silence to CONFIRMED.

## Initial assumptions requiring club signoff
Exact weekly role counts, member eligibility/skills, deadlines, officer authority, data retention, consent text, backup schedule, no-show policy, and manual fallback protocol are TBD.
