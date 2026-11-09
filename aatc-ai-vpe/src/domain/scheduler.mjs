// Eligibility guard only; complete constraint solver will follow.
export function isEligible({ member, meetingId, role, availability, currentAssignments = [] }) {
  if (!member || member.status !== "ACTIVE" || !role) return false;
  if (availability !== "AVAILABLE") return false;
  if (member.excludedRoles?.includes(role.id)) return false;
  if (role.allowedExperience?.length && !role.allowedExperience.includes(member.experience)) return false;
  if (role.requiresSpeechReady && !member.speechReady) return false;
  const alreadyAssigned = currentAssignments.filter(a =>
    a.meetingId === meetingId && a.memberId === member.id &&
    ["PROPOSED", "INVITED", "CONFIRMED"].includes(a.status));
  if (alreadyAssigned.length >= (member.maxRolesPerMeeting ?? 1)) return false;
  return true;
}
