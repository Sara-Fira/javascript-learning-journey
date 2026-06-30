const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const testLabels = tests.map(function(test) {
  return test.name + ' - ' + test.status;
});

console.log(testLabels);
