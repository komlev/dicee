import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { hasSameBySide } from "../hasSameBySide";

describe("hasSimilarsBySide", () => {
  it("returns proper values", () => {
    expect(
      hasSameBySide(
        fromSides(["1", "2", "3", "1", "1", "1"], SIX_SIDES),
        "1",
        4,
      ),
    ).toEqual(true);
    expect(
      hasSameBySide(
        fromSides(["1", "2", "3", "1", "5", "6"], SIX_SIDES),
        "1",
        3,
      ),
    ).toEqual(false);
  });
});
