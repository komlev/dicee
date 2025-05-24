import type { Dice } from "../types/Die";
import type { Side, Sides } from "../types/Sides";

/**
 * Filters dice that show a specific side
 * @template T - The type of sides array
 * @param dice - Array of dice to filter
 * @param side - The side to filter by
 * @returns Array of dice that show the specified side
 */
export const getSameBySide = <T extends Sides>(dice: Dice<T>, side: Side) =>
  dice.filter((d) => d.side === side);
