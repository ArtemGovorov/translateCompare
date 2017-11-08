import {
  ITranslationError,
  IValidationResult,
  Severity
} from "./validator/comparisonValidator";
export function compareTranslations(
  base: string,
  translation: string
): IValidationResult[] {
  const result = {
    validatorName: "here",
    errors: [
      {
        Message: `This is an error`,
        Severity: Severity.information
      }
    ]
  };

  return [result];
}

export * from "./validator/comparisonValidator";
