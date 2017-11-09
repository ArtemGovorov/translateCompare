module.exports = () => {
    return {
      files: [
        'tsconfig.json',
        'src/**/*.ts',
        '!**/*spec.ts',
      ],
      tests: [
        '**/*spec.ts',
      ],
      env: {
        type: 'node'
      },
      debug: true,
      testFramework: 'jest'
    };
  };
