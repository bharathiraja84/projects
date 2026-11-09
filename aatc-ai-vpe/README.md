# AATC AI Club Portal — VPE First

**Status:** Specification and test scaffold only; no production accounts or member data connected.

This is one **club-owned, modular** portal for Ambattur Achievers Toastmasters Club (AATC). It supports members and the Executive Committee with role-based views. The first operational feature is the VPE four-week scheduling and explicit confirmation assistant. Future modules can support other ExCom roles, awards, events, approved knowledge Q&A, and consent-based one-to-one notifications.

**Goals:** solve recurring club work; secure and low-cost by default; easy officer handover; avoid false commitments; protect member data and Toastmasters intellectual property.

## Read first
- [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md)
- [AGENTS.md](AGENTS.md)
- [SRS](docs/SRS.md) and [Test Strategy](docs/TEST_STRATEGY.md)
- [Architecture](docs/ARCHITECTURE.md), [Data Model](docs/DATA_MODEL.md)
- [TMI Policy & Brand Compliance](docs/TMI_COMPLIANCE.md)
- [Cost & Operations](docs/COST_OPERATIONS.md)

## Architecture decision
Use **VS Code + Codex + GitHub** to develop. Long-term architecture: one responsive portal with server-side RBAC, a managed/authenticated backend, and a modular database, with optional Google Forms/Sheets/Apps Script adapters for the first VPE workflows. Candidate managed services (Firebase Auth/Firestore/Cloud Run) are **not yet approved** and require cost/privacy assessment before production. Apps Script remains useful but will not be the only long-term authorization layer.

## Safety and compliance
This public GitHub repo contains NO member personal information, live tokens, Toastmasters logos, copyrighted educational content, or private member-only materials. The official logo must be sourced separately from the official Brand Portal and used only according to current rules. The club President/ExCom must approve the portal and clarify website/branding permissions with Toastmasters Brand Team before public launch. This portal is not an official Toastmasters International system and must not imply endorsement.

## Local checks
From this directory: `npm install`, `npm run check`. Existing pure-JS tests are foundational scaffolding only. No deployed feature is implemented yet.
