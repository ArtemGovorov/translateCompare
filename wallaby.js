module.exports = () => {
    return {
      files: [
        'src/**/*.ts',
      ],
      tests: [
        'tests/**/*.spec.ts',
      ],
      compilers: {
        '**/*.ts': wallaby.compilers.typeScript({
          // TypeScript compiler specific options
          // https://github.com/Microsoft/TypeScript/wiki/Compiler-Options
          // (no need to duplicate tsconfig.json, if you have it, it'll be automatically used)
        })
      },
      debug: true
    };
  };
  