import { describe, expect, it } from "vitest";
import { scheduleMeeting, TIME_FORMAT_ERROR_STRING } from "./coercion";

// scheduleMeeting(..) should take a start time
//  (in 24-hour format as a string “hh:mm”)
//  and a meeting duration (number of minutes). 
// It should return true if the meeting falls entirely within the work day 
// (according to the times specified in dayStart and dayEnd);
//  return false if the meeting violates the work day bounds.



describe("schedule meeting", () => {
  it('throws an error when the hh:mm format is not used', () => {
    expect(() => scheduleMeeting('9123109312', 0)).toThrowError(TIME_FORMAT_ERROR_STRING)
  })
  it("returns true when meeting falls entirely within the bounds of the workday", () => {

  expect(scheduleMeeting("7:30", 30)).toBeTruthy();
  expect(scheduleMeeting("11:30", 60)).toBeTruthy();
  expect(scheduleMeeting("17:00", 45)).toBeTruthy();
  expect(scheduleMeeting("17:30", 15)).toBeTruthy();
  });
  it('returns false when meeting falls outside the bounds of the workday', () => {
    expect(scheduleMeeting("7:00", 15)).toBeFalsy(); 
    expect(scheduleMeeting("7:15", 15)).toBeFalsy(); 
    expect(scheduleMeeting("17:30", 16)).toBeFalsy();
    expect(scheduleMeeting("18:00", 15)).toBeFalsy();
  })
});
// Simpson, Kyle. You Don't Know JS Yet: Get Started (p. 114). GetiPub & Leanpub. Kindle Edition.
