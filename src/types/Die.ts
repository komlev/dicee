import { getId } from "../utils/id";
import type { Side, Sides } from "./Sides";

/**
 * Represents a single die with multiple sides
 * @template T - The type of sides array
 */
export class Die<T extends Sides> {
  private _id: string;
  private _sides: T;
  private _sideIndex: number;

  /**
   * Creates a new die instance
   * @param sides - Array of possible sides for the die
   * @param side - Initial side to show (defaults to first side)
   * @param id - Unique identifier for the die (generated if not provided)
   */
  constructor(sides: T, side: Side = sides[0], id: string = getId()) {
    this._id = id;
    this._sides = sides;
    this._sideIndex = 0;
    this.side = side;
  }

  /**
   * Gets the unique identifier of the die
   */
  get id(): string {
    return this._id;
  }

  /**
   * Sets the unique identifier of the die
   */
  set id(value: string) {
    this._id = value;
  }

  /**
   * Gets all possible sides of the die
   */
  get sides(): Sides {
    return this._sides;
  }

  /**
   * Gets the current side of the die
   */
  get side(): Side {
    return this.sides[this._sideIndex];
  }

  /**
   * Sets the current side of the die
   * If the provided side is not in the sides array, defaults to the first side
   */
  set side(value: Side) {
    let index = this.sides.indexOf(value);
    if (index === -1) index = 0;
    this._sideIndex = index;
  }

  /**
   * Gets the index of the current side
   */
  get sideIndex(): number {
    return this._sideIndex;
  }

  /**
   * Sets the index of the current side
   */
  set sideIndex(value: number) {
    this._sideIndex = value;
  }
}

/**
 * Represents an array of dice
 * @template T - The type of sides array
 */
export type Dice<T extends Sides> = Die<T>[];
