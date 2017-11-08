import {
  compareTranslations as ct,
  ITranslationError,
  Severity
} from "../src/compareTranslations/compareTranslations";

describe("compare translation tests", () => {
  it("should behave...", () => {
    expect(ct).toBeTruthy();
  });

  it("should have a severity", () => {
    const r = ct("a", "b");
    expect(r[0].errors.length).toBe(1);
    expect(r[0].errors[0].Severity).toBe(Severity.information);
  });
});
