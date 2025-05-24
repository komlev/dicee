import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";

describe("fromSides", () => {
  it("returns proper values", () => {
    const sides = ["1", "1", "1", "2"];
    const result = fromSides(sides, SIX_SIDES);
    expect(result?.map((d) => d.side)).toEqual(sides);
  });
});
