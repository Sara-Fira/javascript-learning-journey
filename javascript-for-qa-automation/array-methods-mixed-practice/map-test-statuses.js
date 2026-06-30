const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const testStatuses = tests.map(function(test) {
  return test.status;
});

console.log(testStatuses);
