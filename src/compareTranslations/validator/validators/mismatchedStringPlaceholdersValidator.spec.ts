import { MismatchedStringPlaceholdersValidator } from "./mismatchedStringPlaceholdersValidator";
describe("compare translation tests", () => {
  let comparer: MismatchedStringPlaceholdersValidator;

  beforeEach(() => {
    comparer = new MismatchedStringPlaceholdersValidator();
  });

  

  it("should exist...", () => {
    expect(comparer).toBeTruthy();
  });

  it("should return", () => {
    const errors = comparer.ValidatePhrases("1", "2").errors;
    expect(errors).toBeFalsy();
  });
});
