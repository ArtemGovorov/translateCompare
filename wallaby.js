module.exports = () => {
    return {
      files: [
        'src/**/*.ts',
      ],
      tests: [
        'tests/**/*.spec.ts',
      ],
      env: {
        type: 'node'
      },
      debug: true,
      testFramework: 'jest'
    };
  };
