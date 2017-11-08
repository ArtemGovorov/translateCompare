# translateCompare
As part of our translation solution we need to compare a translated json file with it's English source file and identify the following structural errors.
- keys in baseFile that are not in translatedFile (missing keys).
- keys in translatedFile that are not in baseFile (excess keys)
- mismatched string interpolation placeholders (eg, "hello {0}, {1}" vs "bonjour {0}")

## Features:
- Build core logic as a TypeScript / JS function which can be dropped into other apps. Function takes in two (json) strings and returns an array of strings (error messages). An empty return indicates success.
- During development, host function in a node cli app which can be used straight away (also potentially in automated build steps)
- Build validators as functions so that it's trivial to add future rules. Validators will be one of two types, 1/ comparing the whole files (eg finding missing keys) and 2/ comparing strings of the same key (eg, finding bad string interpolation placeholders)

## Assumptions
- Do not assume the source is English. We will use the language baseFile and translatedFile

## Out of Scope for V1
Detailed validation of pluralisation strings
