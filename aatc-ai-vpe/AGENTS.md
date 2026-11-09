# Codex development rules — AATC AI Club Portal
Read in order: DEVELOPMENT_PLAN.md, docs/SRS.md, docs/TMI_COMPLIANCE.md, docs/TEST_STRATEGY.md, docs/ARCHITECTURE.md, docs/DECISIONS.md.

## Product
ONE club-owned responsive portal. RBAC for authenticated MEMBER and EXCOM plus delegated admin; VPE scheduling first. Other officer/AI/chat/WhatsApp modules are future features, not separate sites. This is NOT an official TMI service; never claim affiliation beyond club identity.

## Do not violate
- No member/prospective-member information, internal club or ExCom communications, financial information, TMI nonpublic educational text/PDFs, logo assets or secrets in AI prompts or this public repository. A chatbot may use specifically cleared nonconfidential FAQ statements and public links only. Link public TMI materials; do not scrape protected portals.
- Before public deployment, enforce current Brand Manual, Protocol 4.0 and approved footer; request Brand Team guidance for custom site as needed.
- Never produce a custom club emblem or tagline; never generate/alter TMI logo with AI or upload official logo to AI tools.
- Server-side authentication/authorization and row/document access controls are mandatory; UI-only visibility is insufficient.
- A member's explicit identity-verified acceptance alone confirms a role; no silence-as-consent or automatic confirmed swaps.
- AI can recommend, summarize and draft only; cannot mutate authoritative records or deploy code.
- WhatsApp Cloud API only with lawful permission, official API eligibility, opted-in recipients, approved templates, webhook security, and cost caps. No unofficial group bots.
- Operational auto-recovery is bounded and audited; all changes to features, access or deployments require a human-reviewed GitHub PR and authorization.
- Do not commit real .env, service credentials or live data. Use synthetic unit-test fixtures.
- Keep source modular, choose low-cost maintainable services, track spend and avoid unnecessary dependencies.

## Engineering workflow
Small branch/PR per feature. Link SRS IDs to tests in docs/TRACEABILITY.md. Run npm run check and security/privacy checks before claiming complete. Keep adapters isolated, domain logic deterministic, with timestamps and idempotency/locking. Update DEVELOPMENT_PLAN.md after each session. Avoid modifying unrelated repository files.
