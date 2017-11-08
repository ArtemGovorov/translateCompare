import { Add, Subtract } from "../src/myfunctions";
describe("test model", () => {
  it("should match numbers", () => {
    expect(1).toBe(1);
  });

  it("should behave...", () => {
    expect(23).toBeCloseTo(23);
  });

  it("should add", () => {
    expect(Add(1, 2)).toBe(5);
  });
});
