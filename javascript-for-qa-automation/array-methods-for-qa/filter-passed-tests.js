const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

const passedTests = tests.filter(function(test) {
  return test.status === 'passed';
});

console.log(passedTests);
