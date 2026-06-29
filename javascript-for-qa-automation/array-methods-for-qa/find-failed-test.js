const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

const failedTest = tests.find(function(test) {
  return test.status === 'failed';
});

console.log(failedTest);
