import { IPhraseValidator, IValidationResult } from "../comparisonValidator";

export class MismatchedStringPlaceholdersValidator implements IPhraseValidator {
  public ValidatePhrases(base: string, translation: string): IValidationResult {
    throw new Error("Method not implemented.");
  }
}
