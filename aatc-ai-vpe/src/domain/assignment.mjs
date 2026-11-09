// Deterministic domain logic; no Google APIs or AI here.
export const TERMINAL = new Set(["DECLINED", "EXPIRED", "CANCELLED", "COMPLETED"]);
const transitions = Object.freeze({
  PROPOSED: new Set(["INVITED"]),
  INVITED: new Set(["CONFIRMED", "DECLINED", "EXPIRED"]),
  CONFIRMED: new Set(["CANCELLED", "COMPLETED"])
});
export function transition(current, next) {
  if (!transitions[current]?.has(next)) {
    throw new Error(`Illegal assignment transition: ${current} -> ${next}`);
  }
  return next;
}
export function applyMemberDecision({ status, decision, verifiedMemberId, assignedMemberId, isExpired = false }) {
  if (!verifiedMemberId || verifiedMemberId !== assignedMemberId) throw new Error("Unauthorized member");
  const targets = { ACCEPT: "CONFIRMED", DECLINE: "DECLINED", CANCEL: "CANCELLED" };
  const target = targets[decision];
  if (!target) throw new Error("Invalid decision");
  if (isExpired && status === "INVITED") throw new Error("Expired invitation");
  if (status === target) return { status, duplicate: true };
  return { status: transition(status, target), duplicate: false };
}
