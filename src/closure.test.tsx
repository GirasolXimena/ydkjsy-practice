import { describe, expect, it } from "vitest";
import { range, start3, start4 } from "./closure";

describe("closure", () => {
  it("goes up by one", () => {
    expect(range(3, 3)).toEqual([3]);
    expect(range(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
    expect(range(3, 0)).toEqual([]);
  });
  it('goes up by three', () => {
    expect(start3(3)).toEqual([3])
    expect(start3(8)).toEqual([3,4,5,6,7,8])
    expect(start3(0)).toEqual([])
    expect(start4(6)).toEqual([4,5,6])
  })
});
