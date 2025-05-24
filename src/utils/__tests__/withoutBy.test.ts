import { describe, expect, it } from "vitest";
import { withoutBy } from "../withoutBy";

describe("sliceChunk", () => {
  it("returns proper slices", () => {
    expect(
      withoutBy([{ id: 1 }, { id: 2 }, { id: 3 }], "id", { id: 0 }, { id: 2 }),
    ).toEqual([{ id: 1 }, { id: 3 }]);

    expect(
      withoutBy(
        [{ id: 1 }, { id: 2 }, { id: 3 }],
        (d) => d.id,
        { id: 0 },
        { id: 2 },
      ),
    ).toEqual([{ id: 1 }, { id: 3 }]);
  });
});
