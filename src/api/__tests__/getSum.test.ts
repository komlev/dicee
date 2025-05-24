import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { getSum } from "../getSum";

describe("getSum", () => {
  it("returns proper values", () => {
    const set = fromSides(["3", "4", "2", "1", "2"], SIX_SIDES);
    expect(getSum(set)).toEqual(12);
  });
});
