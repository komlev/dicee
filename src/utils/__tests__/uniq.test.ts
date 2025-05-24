import { describe, expect, it } from "vitest";
import { uniq } from "../uniq";

describe("uniq", () => {
  it("shoyld return unique values from an array", () => {
    const input = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 5];
    const expected = [1, 2, 3, 4, 5];
    const result = uniq(input);
    expect(result).toEqual(expected);
  });
});
