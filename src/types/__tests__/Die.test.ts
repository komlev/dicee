import { describe, expect, it } from "vitest";
import { Die } from "../Die";

describe("Die", () => {
  it("should return proper sides", () => {
    const sides = "12".split("");
    const die = new Die(sides, "1", "die");
    expect(die.sides).toEqual(sides);
    expect(die.id).toEqual("die");
  });

  it("should set proper side", () => {
    const sides = "12".split("");
    const die = new Die(sides);
    die.side = "2";
    expect(die.sideIndex).toEqual(1);
    expect(die.side).toEqual("2");
    die.side = "99";
    expect(die.side).toEqual("1");
  });

  it("should set proper side by sideindex", () => {
    const sides = "12".split("");
    const die = new Die(sides);
    die.sideIndex = 1;
    expect(die.side).toEqual("2");
  });
});
