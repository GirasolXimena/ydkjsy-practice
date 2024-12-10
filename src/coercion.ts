const dayStart = "07:30";

const dayEnd = "17:45";
const timeFormatRegexp = new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
)
// https://digitalfortress.tech/tips/top-15-commonly-used-regex/

export const TIME_FORMAT_ERROR_STRING = 'Must match hh:mm format!'

export function scheduleMeeting(startTime, durationMinutes) {
  if(!timeFormatRegexp.test(startTime)) throw new Error(TIME_FORMAT_ERROR_STRING) 
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