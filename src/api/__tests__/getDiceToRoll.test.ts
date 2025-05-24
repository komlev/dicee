import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { getDiceToRoll } from "../getDiceToRoll";
import { getSides } from "../getSides";

describe("getDiceToRoll", () => {
  it("returns dices to roll", () => {
    // let's have a set of dice rolled
    const dice = fromSides(["2", "1", "1", "3"], SIX_SIDES);
    // and desired roll
    const desiredRoll = ["1", "1", "1", "3"];
    // what die can we roll?
    const result = getDiceToRoll(dice, desiredRoll);

    // we can reroll 2
    expect(getSides(result)).toEqual(["2"]);

    // we have all a combination already
    expect(
      getSides(
        getDiceToRoll(fromSides(["1", "2", "1", "3"], SIX_SIDES), [
          "3",
          "2",
          "1",
          "1",
        ]),
      ),
    ).toEqual([]);

    //we need to reroll all of them
    expect(
      getSides(
        getDiceToRoll(fromSides(["1", "2", "1", "3"], SIX_SIDES), [
          "6",
          "5",
          "4",
          "5",
        ]),
      ),
    ).toEqual(["1", "2", "1", "3"]);
  });
});
