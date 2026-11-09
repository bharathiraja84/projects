import test from "node:test";
import assert from "node:assert/strict";
import { applyMemberDecision, transition } from "../src/domain/assignment.mjs";

test("verified explicit acceptance confirms a live invitation", () => {
  assert.deepEqual(applyMemberDecision({ status:"INVITED", decision:"ACCEPT", verifiedMemberId:"M1", assignedMemberId:"M1" }),
    { status:"CONFIRMED", duplicate:false });
});
test("silence is not an allowed action", () => {
  assert.throws(() => applyMemberDecision({ status:"INVITED", decision:"", verifiedMemberId:"M1", assignedMemberId:"M1" }));
});
test("wrong member cannot accept", () => {
  assert.throws(() => applyMemberDecision({ status:"INVITED", decision:"ACCEPT", verifiedMemberId:"M2", assignedMemberId:"M1" }));
});
test("duplicate accepted decision does not change state", () => {
  assert.deepEqual(applyMemberDecision({ status:"CONFIRMED", decision:"ACCEPT", verifiedMemberId:"M1", assignedMemberId:"M1" }),
    { status:"CONFIRMED", duplicate:true });
});
test("expired invitation cannot be accepted", () => {
  assert.throws(() => applyMemberDecision({ status:"INVITED", decision:"ACCEPT", verifiedMemberId:"M1", assignedMemberId:"M1", isExpired:true }));
});
test("cannot silently replace confirmed member", () => {
  assert.throws(() => transition("CONFIRMED", "INVITED"));
});
