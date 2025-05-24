import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { getSameByNumber } from "../getSameByNumber";
import { getSides } from "../getSides";

describe("getSameByNumber", () => {
  it("returns proper values", () => {
    expect(
      getSameByNumber(
        fromSides(["1", "2", "3", "1", "1", "1"], SIX_SIDES),
        2,
      ).map(getSides),
    ).toEqual([["1", "1", "1", "1"]]);

    expect(
      getSameByNumber(
        fromSides(["1", "1", "1", "2", "2", "2"], SIX_SIDES),
        3,
      ).map(getSides),
    ).toEqual([
      ["1", "1", "1"],
      ["2", "2", "2"],
    ]);

    expect(
      getSameByNumber(
        fromSides(["1", "1", "1", "2", "2", "3"], SIX_SIDES),
        2,
        true,
      ).map(getSides),
    ).toEqual([["2", "2"]]);
  });
});
