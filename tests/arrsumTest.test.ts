import { arrsum } from "../typescript/arrsum";

describe("arrsum", () => {
  it("returns the sum of an array of numbers", () => {
    expect(arrsum([1, 2, 3])).toBe(6);
    expect(arrsum([4, 5, 6])).toBe(15);
  });
});
