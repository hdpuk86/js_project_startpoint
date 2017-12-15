exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['client/src/models/tests/integration/tests.js']
};
