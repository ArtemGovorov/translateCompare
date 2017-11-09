import { compareTranslations, ComparisonValidator } from "../src/compareTranslations/compareTranslations";

describe("compare translation tests", () => {
  let comparer: ComparisonValidator;

  beforeEach(() => {
    comparer = new ComparisonValidator();
  });

  it("should behave...", () => {
    expect(comparer).toBeTruthy();
  });

  it("should have a some phrase validators", () => {
    expect(comparer.PhraseValidators).toBeDefined();
    expect(comparer.PhraseValidators.length).toBe(1);
  });

  it("should have a some file validators", () => {
    expect(comparer.FullFileValidators).toBeDefined();
    expect(comparer.FullFileValidators.length).toBe(1);
  });
});
