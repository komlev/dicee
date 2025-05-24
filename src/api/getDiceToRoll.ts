import { type Dice, Die } from "../types/Die";
import type { Sides } from "../types/Sides";

/**
 * Filters dice that need to be rolled to achieve desired sides
 * @template T - The type of sides array
 * @param dice - Array of dice to check
 * @param desiredSides - Array of desired sides to achieve
 * @returns Array of dice that need to be rolled to achieve desired sides
 * @description
 * This function takes an array of dice and desired sides, and returns only the dice
 * that need to be rolled to achieve the desired sides. It matches each die's current
 * side with the desired sides, removing matched sides from consideration.
 */
export const getDiceToRoll = <T extends Sides>(
  dice: Dice<T>,
  desiredSides: T,
) => {
  const leftSides = [...desiredSides];
  return dice.reduce((acc: Dice<T>, die: Die<T>) => {
    const index = leftSides.indexOf(die?.side);
    if (index !== -1) {
      leftSides.splice(index, 1);
    } else {
      return [...acc, die];
    }
    return acc;
  }, []);
};
