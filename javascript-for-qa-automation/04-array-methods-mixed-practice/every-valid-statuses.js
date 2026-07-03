const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const allStatusesAreValid = tests.every(function(test) {
  return test.status === 'passed' || test.status === 'failed';
});

console.log(allStatusesAreValid);
