module.exports = () => {
    return {
      files: [
        'tsconfig.json',
        'src/**/*.ts',
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
