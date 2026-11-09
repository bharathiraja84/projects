# Google Apps Script deployment (NOT CONFIGURED)
## Prerequisites
- Club-controlled Google account with access to a TEST spreadsheet; do not use members' live data.
- Node.js LTS, npm, @google/clasp CLI installed.
- OAuth authorization by the deployment owner.
## Suggested steps
1. `npm install` and `npm test`.
2. `npm install -g @google/clasp` (or use `npx clasp`).
3. `clasp login` interactively using the designated Google account.
4. Create a new standalone test Apps Script project with `clasp create --type standalone --title "AATC AI-VPE TEST"` from this folder **or** link an existing project with a private local .clasp.json.
5. Set `.clasp.json` to use `apps-script` as rootDir, only after verifying project ID and script files.
6. `clasp push`; inspect changes, triggers and permissions. Never push directly to production until pilot signoff.
7. Configure installable form-submit and time-driven triggers using the authorized deployment account.
8. Run test forms, validate log/Sheet data, reconcile outbox and verify kill switch.
## Security
Keep `.clasp.json`, `.clasprc.json`, .env, local test fixtures with PII and all credentials out of Git. Use Script Properties for service config and protected secrets; minimize access.
Apps Script clock triggers are approximate. Do not assume exactly-on-the-minute execution.
Rollback: pause outbound work, restore previous script version, validate Sheet data and audit, and use manual schedule.
