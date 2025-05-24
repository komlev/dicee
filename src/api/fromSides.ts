import { type Dice, Die } from "../types/Die";
import type { Sides } from "../types/Sides";

/**
 * Creates an array of dice from current sides and new sides
 * @template T - The type of current sides array
 * @template K - The type of new sides array
 * @param sideList - Array of current sides to initialize dice with
 * @param sides - Array of possible sides for the new dice
 * @returns Array of dice initialized with current sides but using new sides array
 */
export const fromSides = <T extends Sides, K extends Sides>(
  sideList: T,
  sides: K,
): Dice<K> => sideList.map((s) => new Die(sides, s));
