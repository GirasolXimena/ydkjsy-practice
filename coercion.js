function scheduleMeeting(startTime, durationMinutes) {
  const dayStart = "07:30";
  const dayEnd = "17:45";
  const getTime = (str) => str.split(":").map((char) => Number(char));
  const afterStart = (start, meetingStart, meetingEnd) =>
    start <= meetingStart && start <= meetingEnd;
  const beforeEnd = (end, meetingStart, meetingEnd) =>
    end >= meetingStart && end >= meetingEnd;

  const toFrac = ([hour, minute]) => hour + minute / 60;
  const [hour, minute] = getTime(startTime);

  const compStart = toFrac(getTime(dayStart));
  const compMeeting = toFrac(getTime(startTime));
  const compEnd = toFrac(getTime(dayEnd));

  return (
    afterStart(compStart, compMeeting, compEnd) &&
    beforeEnd(
      compEnd,
      compMeeting,
      toFrac([
        Math.floor((minute + durationMinutes) / 60) + hour,
        (minute + durationMinutes) % 60,
      ])
    )
  );
}
console.log(scheduleMeeting("7:00", 15));
console.log(scheduleMeeting("07:15", 30));
console.log(scheduleMeeting("7:30", 30));
console.log(scheduleMeeting("11:30", 60));
console.log(scheduleMeeting("17:00", 45));
console.log(scheduleMeeting("17:30", 30));
console.log(scheduleMeeting("18:00", 15));
