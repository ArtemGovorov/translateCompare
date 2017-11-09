import { IPhraseValidator, IValidationResult } from "../comparisonValidator";
import { ValidationResult } from "../validationResult";

export class MismatchedStringPlaceholdersValidator implements IPhraseValidator {
  public ValidatePhrases(base: string, translation: string): IValidationResult {
    const result = new ValidationResult();
    return result;
  }
}
