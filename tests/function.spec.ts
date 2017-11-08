import otherFunctions from "../src/moreFunctions";
import { Add, Subtract } from "../src/myfunctions";

describe("test model", () => {
  it("should match numbers", () => {
    expect(1).toBe(1);
  });

  it("should multiply", () => {
    expect(otherFunctions().Multiply(2, 3)).toBe(6);
  });

  it("should behave...", () => {
    expect(23).toBeCloseTo(23);
  });

  it("should add", () => {
    expect(Add(1, 2)).toBe(3);
  });
});
