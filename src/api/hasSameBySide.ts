import type { Dice } from "../types/Die";
import type { Side, Sides } from "../types/Sides";
import { getSameBySide } from "./getSameBySide";

/**
 * Checks if there are at least a specified number of dice showing the same side
 * @template T - The type of sides array
 * @param dice - Array of dice to check
 * @param side - The side to check for
 * @param size - Minimum number of dice required to show the specified side
 * @returns True if at least 'size' number of dice show the specified side
 */
export const hasSameBySide = <T extends Sides>(
  dice: Dice<T>,
  side: Side,
  size: number,
) => getSameBySide(dice, side).length >= size;
