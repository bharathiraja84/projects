# Software Requirements Specification — AATC AI Club Portal (v1.1 draft)
**Status:** NOT APPROVED; updated 2026-11-10. Scope: one club-owned portal with VPE scheduling/confirmation FIRST. Future ExCom roles, knowledge chatbot, official one-to-one WhatsApp and self-healing are controlled later phases. Prior 30 FR + 16 NFR VPE baseline is retained by reference below, with expanded requirements.

## Stakeholders and actors
Club President (portal owner/governance); VPE (schedule controller); ExCom officer (scoped club operations); Member (self-service); delegated admin (technical, non-content); guest/public (approved club information); AUTOMATION (deterministic); AI_ADVISOR (read-only).

## Priority rules
P0 = mandatory before pilot/public release; P1 = before first member portal release; P2 = deferred with change approval. Tested against acceptance criteria below.

## A. Shared portal and authorization
| ID | Priority | Requirement and acceptance criterion |
|---|---|---|
| PORT-001 | P0 | ONE club-owned portal with independently deployable modules; current VPE functions are the first module. No independent officer-created club site. |
| PORT-002 | P0 | Role-aware navigation: GUEST, MEMBER, VPE, VPM, VPPR, SECRETARY, TREASURER, PRESIDENT, TECH_ADMIN; least-privilege server-side scopes. |
| PORT-003 | P0 | Default-deny access to membership, attendance, speeches, profiles, dashboards, audit and documents unless authorized; test direct URL/API access. |
| PORT-004 | P0 | Verified authentication, active member mapping, officer-term start/end and prompt revocation; no reliance on hidden UI controls. |
| PORT-005 | P1 | Members view/edit own availability, preferences, role acceptance, privacy choices and permitted education summary; no other member's private records. |
| PORT-006 | P1 | ExCom membership dashboard shows verified counts/status and attendance statistics only within approved authorization; source and as-of date displayed. |
| PORT-007 | P1 | Approved public/member events, weekly awards, contest wins, Wall of Fame published only after officer moderation and applicable participant consent. |
| PORT-008 | P1 | Responsive mobile-first portal with keyboard access, readable color contrast and simple workflows for voluntary members. |
| PORT-009 | P0 | Clear distinction between local club data and official TMI Club Central/Base Camp records; no claims of official integration absent authorized API. |
| PORT-010 | P0 | App remains operable without model or WhatsApp subscriptions; toggles disable nonessential paid integrations. |

## B. VPE scheduling and member accountability (previous baseline strengthened)
| ID | Priority | Requirement and acceptance criterion |
|---|---|---|
| FR-001 | P0 | Maintain unique active member ID, verified email, status, role preferences and consent; reject duplicates. |
| FR-002 | P0 | Configurable role definitions, slot counts, eligibility, exclusions, role incompatibilities. |
| FR-003 | P0 | Generate four-week club-local meeting calendar, including exceptions/special meetings. |
| FR-004 | P0 | Accept per-meeting AVAILABLE/MAYBE/UNAVAILABLE/UNKNOWN with timestamped provenance. |
| FR-005 | P0 | Invite only AVAILABLE, active, eligible, nonconflicting members under automatic policy; MAYBE needs review. |
| FR-006 | P0 | Speech slot proposal requires recorded readiness/intent. |
| FR-007 | P0 | Respect per-meeting maximum roles and mutual exclusions. |
| FR-008 | P0 | Configurable, explainable participation fairness + education/preference scores; no punitive automatic ranking. |
| FR-009 | P0 | Propose conflict-free assignments, leave impossible slots vacant with explanation. |
| FR-010 | P0 | VPE or delegated officer approves invitations before first send. |
| FR-011 | P0 | Immutable assignment IDs, versions and one active owner per role slot. |
| FR-012 | P0 | Queue emails with deadline, delivery attempt status and idempotency. |
| FR-013 | P0 | Member explicitly accepts/declines/cancels using verified identity; do not infer consent from silence. |
| FR-014 | P0 | Accept only active unexpired invitation belonging to member; verify conflict-free state. |
| FR-015 | P0 | Stale, forged, duplicate-authority and unauthorized decisions do not alter schedule. |
| FR-016 | P0 | Duplicate identical submits are idempotent; retry-safe. |
| FR-017 | P0 | Validated assignment state changes, expected version, actor and audit record. |
| FR-018 | P0 | Reminders scheduled by rule with deduplication and messaging preferences; no harassment/spam. |
| FR-019 | P0 | Nonresponse expires only after configured time; exception sent to VPE/TMOD. |
| FR-020 | P0 | Decline, expiry or cancellation suggests alternatives but never auto-confirms another member. |
| FR-021 | P0 | Confirmed assignment protected from unapproved changes; cancellation/authorized override audited. |
| FR-022 | P0 | Private officer digest for vacancies and failed communication; member privacy respected. |
| FR-023 | P0 | Agenda only from verified active state; officer approval before publication. |
| FR-024 | P0 | Authorized kill switch pauses notifications and preserves work queue. |
| FR-025 | P1 | Record ACTUAL participation separately from assigned/planned. |
| FR-026 | P1 | Private aggregate participation/response/fairness statistics with method and date. |
| FR-027 | P0 | Member correction/withdrawal route plus audited officer record amendment. |
| FR-028 | P0 | Backups, reconciliation, documented restore and manual fallback. |
| FR-029 | P2 | AI suggests schedules/draft messages only after schema & policy validation. |
| FR-030 | P0 | Entire deterministic VPE workflow operates with AI disabled. |

## C. Knowledge and communications (deferred until approvals)
| ID | Priority | Requirement and acceptance criterion |
|---|---|---|
| KNOW-001 | P2 | Answer club questions only using approved, explicitly nonconfidential club-authored FAQ records and links to public TMI pages. Include source attribution and document freshness. |
| KNOW-002 | P0 | Never send Toastmasters internal communications, confidential Secretary reports, financial data, membership records, or protected materials to external AI services, even if accessible to ExCom. Do not copy, rehost, index protected TMI manuals, copyrighted educational PDFs or Base Camp/member-only content without written permission. No scraping or assumed portal API. |
| KNOW-003 | P2 | Retrieve only nonconfidential and authorized FAQ entries; enforce permission-filtered retrieval and prompt-injection defenses; no ExCom-only report leaks to members/guests. |
| KNOW-004 | P2 | Member WhatsApp history requires lawful consent and officer-curated redaction; raw bulk group ingestion disabled by default. |
| KNOW-005 | P2 | Chatbot discloses AI nature, uncertainty and source; sends ambiguous official-policy questions to official TMI link or officer. |
| MSG-001 | P0 | Email reminders/invitations only after officer-approved policy; clear opt-out for optional announcements. |
| MSG-002 | P2 | WhatsApp 1:1 via official Meta Cloud API only, if eligibility, lawful consent, opt-in, templates/webhook verification and budget gate pass. |
| MSG-003 | P0 | Existing club WhatsApp group is NOT assumed automatable through official APIs; no unofficial browser session bot. |
| MSG-004 | P2 | Chatbot/WhatsApp cannot modify official membership or confirm a role except through authenticated validated workflows. |
| MSG-005 | P2 | “Dropout risk” is a neutral private review signal based on objective and limited metrics, not a public label, automated expulsion or pressure campaign. |

## D. TMI brand, intellectual property and club governance
| ID | Priority | Requirement and acceptance criterion |
|---|---|---|
| TMI-001 | P0 | Club President/ExCom approves and owns the portal; no personal officer microsite; clarify nonstandard portal/branding with brand@toastmasters.org before public launch. |
| TMI-002 | P0 | Use current official Brand Manual colors, logo spacing, typography and voice; obtain logo from authorized Brand Portal only; never invent club logo/tagline or alter TMI marks. |
| TMI-003 | P0 | Display required Toastmasters website disclaimer/IP ownership language in published club site footer per Protocol 4.0; verify exact current text with Brand Team. |
| TMI-004 | P0 | Public club page displays club name, meeting schedule/location/contact, mission, link to District and official toastmasters.org as source of meeting details. |
| TMI-005 | P0 | No rehosting protected TMI materials; link publicly accessible official resources only within allowed conditions. |
| TMI-006 | P0 | No official TMI data sync, impersonation, endorsement or data export without verified access/permission; show “club maintained / not official TMI record”. |
| TMI-007 | P0 | AI never generates, recreates, modifies or uploads TMI trademarked logos; any official marks added as approved static assets by non-AI design process. |
| TMI-008 | P1 | Published AI-generated media uses approved rights/permissions, review and disclosure as required by current TMI policy. |
| TMI-009 | P0 | No paid/commercial exploitation, member solicitation or non-Toastmasters content; compensated maintenance and sponsorship require club/TMI policy review. |
| TMI-010 | P1 | Source register: regulation version/URL, review date, responsible reviewer, approval evidence and compliance exceptions. |

## E. Privacy, cost, maintenance and self-healing
| ID | Priority | Requirement and acceptance criterion |
|---|---|---|
| GOV-001 | P0 | Record member consent/purpose for profile, attendance, education progress, awards, photos, AI processing, notification channels; allow changes and deletion requests consistent with law. |
| GOV-002 | P0 | Define per-entity retention schedules, backup retention, access request and deletion workflow prior to live imports. |
| GOV-003 | P0 | Never expose private contact details, attendance or individual progress publicly; aggregate stats may suppress small groups to prevent re-identification. |
| GOV-004 | P0 | Retain sensitive private member records in restricted stores; keep public GitHub free of credentials, private documents and member lists. |
| GOV-005 | P0 | Officer tenure-based permission revocation and annual/term handover; club retains access/ownership after volunteer departure. |
| GOV-006 | P0 | Set monthly spend ceiling, provider quotas and budget alerts; optional AI/WhatsApp disabled at launch, pay-as-you-go requires officer authorization. |
| GOV-007 | P0 | Restore and manual meeting-operation drill required; error notification goes to current authorized owner. |
| GOV-008 | P2 | Bounded operational auto-retry (idempotent only), health monitoring and fallback; reconcile ambiguous sends rather than duplicate. |
| GOV-009 | P2 | Self-modifying feature requests produce a reviewable branch/PR with cost/privacy/brand impact and tests; never autonomous deployment. |
| GOV-010 | P0 | Minimum-data collection, no indiscriminate WhatsApp history mining, no automated profiling-based punishment or member ranking. |

## Nonfunctional requirements
NFR-001 verified identity; NFR-002 server-side least-privilege RBAC; NFR-003 consent/data minimization; NFR-004 secrets absent from repo; NFR-005 durable audit trail; NFR-006 optimistic concurrency and lock; NFR-007 idempotent triggers; NFR-008 ambiguous-email reconciliation; NFR-009 backup restore drill; NFR-010 manual fallback; NFR-011 error/heartbeat monitoring; NFR-012 timezone Asia/Kolkata; NFR-013 pilot-based service reliability baseline; NFR-014 representative 40-member performance tests; NFR-015 modular maintainability and documentation; NFR-016 schema-validated advisory AI, fail-closed.

## State rules
PROPOSED -> INVITED -> CONFIRMED / DECLINED / EXPIRED; CONFIRMED -> CANCELLED or COMPLETED; any replacement creates a new assignment ID and records a reason. Member response alone cannot bypass officer publication and role eligibility.

## Release gate
No real member data or public website until P0 privacy, club governance, branding clarification, security, identity and restoration gates are approved. P2 AI/WhatsApp/self-modification are excluded from the VPE MVP and require explicit separate review.
