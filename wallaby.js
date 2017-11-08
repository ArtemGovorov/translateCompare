module.exports = () => {
    return {
      files: [
        {pattern: 'dist/*.js', instrument: false},
        'src/*.ts'
      ],
      tests: [
        'test/*Spec.js'
      ],
      debug: true
    };
  };
  