---
name: reliability-vv
description: Validate functional correctness, fault tolerance, security and auditability of AATC AI-VPE.
---
# Reliability & V&V
- Derive tests from state-machine transitions and failure modes.
- Cover invalid/duplicate/stale responses, concurrent writes, communication outages and calendar rollovers.
- Distinguish send-attempt success from email delivery/read confirmation.
- Assert safe behavior under AI unavailability and malformed model output.
- Track requirement/test links and test evidence in docs/TRACEABILITY.md.
- Do not ship with unresolved critical/high-severity defects.
