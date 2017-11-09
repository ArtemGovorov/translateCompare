import { MismatchedStringPlaceholdersValidator } from "./validators/mismatchedStringPlaceholdersValidator";
import { MissingKeysValidator } from "./validators/missingKeysValidator";
export class ComparisonValidator {
  public FullFileValidators: IFullFileValidator[] = [
    new MissingKeysValidator()
  ];
  public PhraseValidators: IPhraseValidator[] = [
    new MismatchedStringPlaceholdersValidator()
  ];
}

/** Used to compare entire json files, for example, for missing keys */
export interface IFullFileValidator {
  ValidateFiles(base: string, translation: string): IValidationResult;
}

/** Used to compare single phrases. For example, checking for correcet numver of string interpolation placeholders */
export interface IPhraseValidator {
  ValidatePhrases(base: string, translation: string): IValidationResult;
}

export interface IValidationResult {
  validatorName: string;
  errors: ITranslationError[];
}

export interface ITranslationError {
  Message: string;
  Severity: Severity;
}

export enum Severity {
  information,
  warning,
  error
}

// function isFish(pet: Fish | Bird): pet is Fish {
//     return (<Fish>pet).swim !== undefined;
// }
