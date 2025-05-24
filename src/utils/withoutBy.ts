type GetterFunc<T> = (value: T) => unknown;
type Getter<T> = GetterFunc<T> | keyof T;

export const withoutBy = <T extends Record<string, unknown>>(
  arr: T[] | null | undefined,
  getter: Getter<T>,
  ...rest: T[]
): T[] => {
  if (!arr) return arr!;
  const isFunc = typeof getter !== "string";
  const values = rest?.map((v) =>
    isFunc ? (getter as GetterFunc<T>)(v) : v?.[getter],
  );

  return arr.filter((v) => {
    const value = isFunc ? (getter as GetterFunc<T>)(v) : v?.[getter];
    return !values.includes(value);
  });
};
