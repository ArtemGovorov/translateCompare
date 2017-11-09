import { ITranslationError, IValidationResult } from "../compareTranslations";
export class ValidationResult implements IValidationResult {
  public validatorName: string;
  public errors: ITranslationError[];
}
