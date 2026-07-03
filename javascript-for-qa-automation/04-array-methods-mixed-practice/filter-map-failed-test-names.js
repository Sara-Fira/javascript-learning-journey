const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const failedTests = tests.filter(function(test) {
  return test.status === 'failed';
});

const failedTestNames = failedTests.map(function(test) {
  return test.name;
});

console.log(failedTestNames);
