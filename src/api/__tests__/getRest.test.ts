import { describe, expect, it } from "vitest";
import { take } from "../../utils/take";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { getRest } from "../getRest";
import { getSides } from "../getSides";

describe("getRest", () => {
  it("returns proper values", () => {
    const set = fromSides(["6", "6", "3", "1", "2"], SIX_SIDES);
    const nonRoll = take(set, 2);
    const result = getRest(set, nonRoll);
    expect(getSides(result)).toEqual(["3", "1", "2"]);
  });
});
