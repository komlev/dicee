import type { Dice } from "../types/Die";
import type { Sides } from "../types/Sides";

/**
 * Returns dice that are not in the filterOut array
 * @template T - The type of sides array
 * @param dice - Array of dice to filter
 * @param filterOut - Array of dice to exclude
 * @returns Array of dice that are not in the filterOut array
 * @description
 * This function filters out dice that have matching IDs in the filterOut array.
 * It's useful for getting the remaining dice after some dice have been selected.
 */
export const getRest = <T extends Sides>(dice: Dice<T>, filterOut: Dice<T>) =>
  dice.filter((d) => !filterOut.find((s) => s.id === d.id));
