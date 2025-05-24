import type { Dice } from "../types/Die";
import type { Sides } from "../types/Sides";

/**
 * Returns arrays of dice that show the same side, filtered by count
 * @template T - The type of sides array
 * @param dice - Array of dice to check
 * @param num - Number of dice required to show the same side
 * @param exact - If true, returns only groups with exactly 'num' dice. If false, returns groups with 'num' or more dice
 * @returns Array of dice arrays, where each inner array contains dice showing the same side
 * @description
 * This function groups dice by their current side and returns groups that match
 * the specified count criteria. For example, if num=3 and exact=false, it will
 * return all groups of dice that show the same side and have 3 or more dice.
 */
export const getSameByNumber = <T extends Sides>(
  dice: Dice<T>,
  num: number,
  exact: boolean = false,
) => {
  const pairs = dice.reduce((acc: { [key: string]: Dice<T> }, d) => {
    const { side } = d;
    if (acc[side] === undefined) {
      acc[side] = [];
    }
    acc[side].push(d);
    return acc;
  }, {});

  return Object.values(pairs).filter(
    (p) => (p.length === num && exact) || (p.length >= num && !exact),
  );
};
