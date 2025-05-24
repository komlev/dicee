import { describe, expect, it } from "vitest";
import { SIX_SIDES } from "../../__tests__/mocks";
import { fromSides } from "../fromSides";
import { getSameBySide } from "../getSameBySide";

describe("getSimilarsBySide", () => {
  it("returns proper values", () => {
    expect(
      getSameBySide(
        fromSides(["1", "2", "3", "1", "1", "1"], SIX_SIDES),
        "1",
      ).map((d) => d.side),
    ).toEqual(["1", "1", "1", "1"]);
    expect(
      getSameBySide(
        fromSides(["1", "2", "3", "1", "5", "5"], SIX_SIDES),
        "1",
      ).map((d) => d.side),
    ).toEqual(["1", "1"]);
  });
});
