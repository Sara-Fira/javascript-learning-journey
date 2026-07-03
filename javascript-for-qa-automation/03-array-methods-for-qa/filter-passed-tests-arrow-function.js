const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

const passedTests = tests.filter(test => test.status === 'passed');

console.log(passedTests);
