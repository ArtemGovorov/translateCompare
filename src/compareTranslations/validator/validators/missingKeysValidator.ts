import { IFullFileValidator, IValidationResult } from "../comparisonValidator";

export class MissingKeysValidator implements IFullFileValidator {
  public ValidateFiles(base: string, translation: string): IValidationResult {
    throw new Error("Method not implemented.");
  }
}
