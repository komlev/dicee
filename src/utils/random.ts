import seedRandom from "seed-random";

export type RandomFunc = (max: number) => number;

export const getRandom = (seed?: string) => {
  const rand = seedRandom(seed || Math.random().toString());
  return (max: number) => Math.floor(rand() * Math.floor(max + 1));
};
