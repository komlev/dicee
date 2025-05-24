import { getSides } from "../api/getSides";
import { getRandom, type RandomFunc } from "../utils/random";
import { type Dice, Die } from "./Die";
import type { Sides } from "./Sides";

/**
 * Represents a set of dice that can be rolled together
 * @template T - The type of sides array
 */
export class DiceSet<T extends Sides> {
  private _dice: Dice<T>;
  private _random: RandomFunc;

  /**
   * Creates a new set of dice
   * @param diceNum - Number of dice in the set
   * @param sides - Array of possible sides for each die
   * @param seed - Optional seed for random number generation
   */
  constructor(diceNum: number, sides: T, seed?: string) {
    this._dice = new Array(diceNum).fill(0).map(() => new Die(sides));
    this._random = getRandom(seed);
  }

  /**
   * Sets the sides for all dice in the set
   * @param sides - Array of sides to set for each die
   */
  setSides = (sides: T): void => {
    this._dice.forEach((die, index) => {
      die.side = sides?.[index];
    });
  };

  /**
   * Gets all dice in the set
   */
  get dice() {
    return this._dice;
  }

  /**
   * Gets the current sides of all dice in the set
   */
  get sides(): T {
    return getSides(this._dice);
  }

  /**
   * Rolls all dice in the set, optionally excluding some dice
   * @param exclude - Optional array of dice to exclude from rolling
   * @returns Array of dice that were rolled
   */
  roll = (exclude?: Dice<T>): Dice<T> => {
    const rand = this._random;
    const result: Dice<T> = [];
    this._dice.forEach((die) => {
      const { sides } = die;
      if (exclude && exclude.find((d) => d.id === die.id)) return;
      die.side = sides[rand(sides.length - 1)];
      result.push(die);
    });

    return result;
  };
}
