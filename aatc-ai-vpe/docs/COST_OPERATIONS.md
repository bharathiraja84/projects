# Cost, simplicity, security and maintenance policy

## Budget objective
Default **₹0 incremental recurring spend** for the pilot if free-tier and existing accounts suffice; club explicitly approves a budget if not. This is a design goal, NOT a guarantee. Do not activate paid API calls, hosting billing, SMS, WhatsApp or unrestricted generative AI by default.

## Tradeoff assessment before stack decision
Score candidates (Google Sheets/Forms/Apps Script, Firebase Auth/Firestore/Cloud Functions/Hosting, other equivalent):
- Secure server-side RBAC and storage rules (must pass)
- 40–100 members; low-volume weekly workflows; quotas
- Officer handover without dependence on original developer
- Backup and restoration; audit; domain/branding control
- Estimated total cost at 1x / 5x usage, free-tier thresholds and alerts
- Operational complexity and migration cost
Store decision with evidence in docs/DECISIONS.md.

## Controls
- Per-provider budgets and quota alerts; soft/hard kill switches for optional calls.
- AI off until secure retrieval, monitoring and model evaluation are ready.
- Email first (within account quotas). WhatsApp 1:1 is defer-and-approve, with Meta business/number/template verification, opt-in and realistic message forecasts.
- No automatic active-payment enrollment or new purchased resources.
- No public member data or private export in GitHub/CI.
- Monthly owner check: authentication logs, last backup, stale member/officer privileges, failed sends, costs.
- Officer handover once per term; at least two authorized maintainers.
- Incident response: pause notifications, revoke compromised access, run manual agenda, assess data disclosure, restore from validated backups, document corrective action.

## Proposed telemetry (no secrets/PII)
Daily job heartbeat, pending invitation count, exceptions, confirmed slot counts, message attempts and failures, AI usage when enabled, spending against approved ceiling. Avoid member ranking or labels.
