# Data model — initial columns (subject to review)
All records require stable IDs. Store event timestamps UTC ISO strings. Use spreadsheet header names exactly.
- Members(Member_ID, Name, Email, Status, Join_Date, Experience_Level, Preferred_Roles, Excluded_Roles, Reminder_Opt_In, Maximum_Roles_Per_Meeting, Consent_Version)
- Roles(Role_ID, Role_Name, Slots, Eligibility_Rule, Duration_Minutes, Active, Combination_Restrictions)
- Meetings(Meeting_ID, Local_Date, Local_Start, Local_End, Mode, Status, Approved_By, Published_At)
- Availability(Member_ID, Meeting_ID, Availability, Speech_Ready, Updated_At, Source_Response_ID); unique Member_ID+Meeting_ID
- Assignments(Assignment_ID, Meeting_ID, Role_ID, Slot_No, Member_ID, Status, Version, Proposed_At, Invited_At, Deadline_At, Responded_At, Confirmed_At)
- Responses(Response_ID, Assignment_ID, Member_ID, Decision, Received_At, Verified_Email, Validation_Status)
- Participation(Meeting_ID, Member_ID, Role_ID, Performed, Recorded_At)
- Notifications(Message_ID, Assignment_ID, Type, Recipient, Status, Idempotency_Key, Attempt_Count, Last_Attempt_At)
- Audit_Log(Event_ID, Entity_ID, Old_State, New_State, Actor, Event_Time, Details, Operation_ID)
- Settings(Key, Value, Description)
There may also be Raw_Form_Responses tabs, restricted to officers. Never provide direct member edit access to master operational tables.
