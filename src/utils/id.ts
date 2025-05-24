import { nanoid } from "nanoid";

export const getId = (length: number = 8): string => {
  return nanoid(length);
};
