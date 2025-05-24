export const uniq = <T extends Array<unknown>>(array: T): T =>
  array.filter((v, i) => array.indexOf(v) === i) as T;
