import type { Dice } from "../types/Die";
import type { Sides } from "../types/Sides";

/**
 * Calculates the sum of all dice sides, treating them as numbers
 * @template T - The type of sides array
 * @param dice - Array of dice to sum
 * @returns The sum of all dice sides as numbers
 * @description
 * This function assumes that all sides can be parsed as numbers.
 * If a side cannot be parsed as a number, it will be treated as 0.
 */
export const getSum = <T extends Sides>(dice: Dice<T>): number =>
  dice.reduce((acc, d) => acc + (parseInt(d.side, 10) || 0), 0);
