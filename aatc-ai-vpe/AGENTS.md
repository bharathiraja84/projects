# Codex instructions — AATC AI-VPE

You are implementing a volunteer club scheduling system, NOT an autonomous people manager.

## Mandatory reading order
1. DEVELOPMENT_PLAN.md
2. docs/SRS.md
3. docs/TEST_STRATEGY.md
4. docs/ARCHITECTURE.md

## Working practice
- Make one small, reviewable change at a time; work on feature branches, do not push to main.
- Never declare a stage DONE without passing tests and documenting evidence.
- For each change identify SRS requirement IDs and add tests. Prefer pure JavaScript business rules; keep Google services behind adapters.
- Run `npm test` and `npm run lint` before claiming success.
- Ask for policy decisions only if genuinely blocked; use dummy data and safe defaults for exploratory work.
- Preserve existing files, never delete or replace unrelated project content.
- Update DEVELOPMENT_PLAN.md at the end of each coding session.

## Non-negotiable invariants
- Silence is never acceptance. Only a verified member's explicit response can confirm.
- No AI response may create or update confirmed assignments, send email or bypass business constraints.
- Do not reassign confirmed members silently.
- All state changes are validated, version-checked and audit-logged.
- Do not blindly retry ambiguous email deliveries; reconcile.
- No real member names, email addresses, tokens or sensitive club data in code, logs, screenshots or GitHub.
- Use mocked adapters for tests; never call live services from unit tests.
- All outgoing messages require officer approval until explicitly authorized by policy.
- Production deployments require separate manual approval.

## Skills (read the appropriate guide)
- .agents/skills/srs-traceability/SKILL.md
- .agents/skills/apps-script-workflow/SKILL.md
- .agents/skills/reliability-vv/SKILL.md

## Technical conventions
TypeScript can be considered later; MVP starts with testable ES modules and clasp-compatible Apps Script adapters.
Treat sheets as non-transactional storage. Use Locks, version checks, event IDs and reconciliation.
For any security-sensitive feature, include abuse-case tests.
