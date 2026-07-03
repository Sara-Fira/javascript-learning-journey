const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const hasLoginTest = tests.some(function(test) {
  return test.name === 'Login test';
});

console.log(hasLoginTest);
