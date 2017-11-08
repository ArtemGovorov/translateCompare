import { ComparisonValidator } from "../src/compareTranslations/compareTranslations";

describe("compare translation tests", () => {
  beforeEach(() => {
    this.comparer = new ComparisonValidator();
  });

  it("should behave...", () => {
    expect(this.comparer).toBeTruthy();
  });

  it("should have a some phrase validators", () => {
    expect(this.comparer.PhraseValidators).toBeDefined();
    expect(this.comparer.PhraseValidators.length).toBe(1);
  });

  it("should have a some file validators", () => {
    expect(this.comparer.FullFileValidators).toBeDefined();
    expect(this.comparer.FullFileValidators.length).toBe(1);
  });
});
