import type { Dice } from "../types/Die";
import type { Sides } from "../types/Sides";

/**
 * Gets the current sides of all dice in an array
 * @template T - The type of sides array
 * @param dice - Array of dice to get sides from
 * @returns Array of current sides from all dice
 */
export const getSides = <T extends Sides>(dice: Dice<T>): T =>
  dice.map((d) => d.side) as T;
