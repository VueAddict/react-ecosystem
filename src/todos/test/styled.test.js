import { expect } from "chai";
import { getBorderStyle } from "../TodoListItem";

describe("getBorderStyle", () => {
  it("returns none when the date is less than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);
    const expected = "none";
    const actual = getBorderStyle(recentDate, today);
    expect(actual).to.deep.equal(expected);
  });
  it("returns a border when the date is more than 5 days ago", () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 6);
    const expected = "2px solid red";
    const actual = getBorderStyle(recentDate, today);
    expect(actual).to.deep.equal(expected);
  });
});
