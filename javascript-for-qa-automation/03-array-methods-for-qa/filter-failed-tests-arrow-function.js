const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

const failedTests = tests.filter(test => test.status === 'failed');

console.log(failedTests);
