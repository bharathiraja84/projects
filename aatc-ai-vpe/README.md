# AATC AI-VPE Scheduling & Confirmation Assistant

A validation-first, human-in-the-loop tool for Ambattur Achievers Toastmasters Club's Sunday 10:00–12:00 IST meetings.

**Status:** Project scaffold only. No live Google Forms, Sheets, emails, AI calls or deployments are configured.

## Goals
- Four-week rolling meeting schedule
- Fair, eligibility-aware role recommendations
- Explicit member accept/decline/cancel tracking
- Reminder and escalation workflows
- VPE approval of invitations and agenda
- Auditability, privacy and manual fallback

## Architecture
Google Forms → Apps Script validation/workflows → Google Sheets (operational source of truth); MailApp for email; optional AI advisory layer that cannot edit state. `clasp` syncs Apps Script source from VS Code.

## Start here
1. Read [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) and [AGENTS.md](AGENTS.md).
2. Install Node.js LTS, Git, VS Code and Codex.
3. From this folder run `npm install`, `npm test`, `npm run lint`.
4. Copy `.env.example` to `.env` for *local non-secret* configuration, then add real credentials only via secure local/runtime settings.
5. Review [SRS](docs/SRS.md) and [test strategy](docs/TEST_STRATEGY.md).
6. Only after creating an isolated test Google account, spreadsheet and forms, configure `clasp login` and `clasp create` / `clasp clone` as documented in [deployment guide](docs/DEPLOYMENT.md).

**Never run live scripts or email real members until validation and VPE approval.**

## Design conventions
- All identifiers and datetimes stored as UTC ISO 8601; club UI uses Asia/Kolkata.
- Business rules are deterministic, independently unit tested.
- No member PII, credentials, or live .clasp.json committed.
- GitHub issues and DEVELOPMENT_PLAN.md document progress.
