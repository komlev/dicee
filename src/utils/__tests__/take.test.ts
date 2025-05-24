import { describe, expect, it } from "vitest";
import { take } from "../take";

describe("take", () => {
  it("should return first n elements from an array", () => {
    const input = [1, 2, 3, 4, 5];
    expect(take(input, 3)).toEqual([1, 2, 3]);
  });
});
