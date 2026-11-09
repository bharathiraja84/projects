---
name: apps-script-workflow
description: Build safe, testable Google Apps Script Forms/Sheets/MailApp workflows.
---
# Apps Script workflow
- Keep decision logic in src/domain pure modules; Apps Script code is a thin adapter.
- Form prefilled IDs are hints, not authentication. Verify collected Google account email and ownership.
- Add LockService, optimistic row version checking, and audit before acknowledging transition.
- Time triggers are approximate: guard by date window, de-duplicate by occurrence key.
- MailApp send can succeed before recording the send; ambiguous sends require review.
- Never put personal data or secrets in a public repository.
- Separate test and production spreadsheet/form IDs, credentials and triggers.
