import { describe, expect, it } from "vitest";
import { getRandom } from "../random";
import { uniq } from "../uniq";

describe("random", () => {
  it("returns pseudo random number", () => {
    const rand = getRandom("test");
    expect(rand(9)).toEqual(8);
  });

  it("returns value in proper range", () => {
    const rand = getRandom("test");
    const numbers = new Array(100000).fill(0).map(() => rand(9));
    const result = uniq(numbers);
    expect(result.length).toEqual(10);
    expect(Math.min(...result)).toEqual(0);
    expect(Math.max(...result)).toEqual(9);
  });
});
