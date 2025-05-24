import { fromSides } from "./api/fromSides";
import { getDiceToRoll } from "./api/getDiceToRoll";
import { getRest } from "./api/getRest";
import { getSameByNumber } from "./api/getSameByNumber";
import { getSameBySide } from "./api/getSameBySide";
import { getSides } from "./api/getSides";
import { getSum } from "./api/getSum";
import { hasSameBySide } from "./api/hasSameBySide";

import { getRandom, type RandomFunc } from "./utils/random";
export { withoutBy } from "./utils/withoutBy";

import { DiceSet } from "./types/DiceSet";
import { type Dice, Die } from "./types/Die";
import { type Side, type Sides } from "./types/Sides";

export {
  DiceSet,
  Die,
  fromSides,
  getDiceToRoll,
  getRandom,
  getRest,
  getSameByNumber,
  getSameBySide,
  getSides,
  getSum,
  hasSameBySide,
};
export type { Dice, RandomFunc, Side, Sides };
