import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { getSides } from "../getSides";

describe("dice", () => {
  it("getSides returns proper values", () => {
    const sides = ["1", "4", "5"];
    const set = fromSides(sides, SIX_SIDES);
    expect(getSides(set)).toEqual(sides);
  });
});
