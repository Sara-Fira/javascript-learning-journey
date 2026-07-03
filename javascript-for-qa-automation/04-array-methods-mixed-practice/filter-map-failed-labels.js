const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const failedTests = tests.filter(function(test) {
  return test.status === 'failed';
});

const failedTestLabels = failedTests.map(function(test) {
  return 'FAILED: ' + test.name;
});

console.log(failedTestLabels);
