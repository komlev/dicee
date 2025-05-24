import { describe, expect, it } from "vitest";
import { type SixSides, SIX_SIDES } from "../../__tests__/mocks";
import { take } from "../../utils/take";
import { DiceSet } from "../DiceSet";
import { Die } from "../Die";

describe("DiceSet", () => {
  it("should be properly constructed", () => {
    const set = new DiceSet(3, SIX_SIDES, "test");
    expect(set.sides).toEqual(["1", "1", "1"]);
    set.roll();
    expect(set.sides).toEqual(["6", "3", "6"]);
  });

  it("should not reroll all dice", () => {
    const getKey = (dice: Die<SixSides>[]) => dice.map((d) => d.side).join("");

    // create a set of 6 dice
    const set = new DiceSet(6, SIX_SIDES, "test");
    // roll them
    set.roll();
    // remember dice
    const nonRoll = take(set.dice, 3);
    const nonRollKey = getKey(nonRoll);
    const allRoll = getKey(set.dice);

    // roll again excluding nonRoll dice
    set.roll(nonRoll);

    // expect
    expect(nonRollKey).toEqual(getKey(nonRoll));
    expect(allRoll).not.toEqual(getKey(set.dice));
  });
});
