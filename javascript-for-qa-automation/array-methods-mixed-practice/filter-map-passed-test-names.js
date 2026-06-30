const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const passedTests = tests.filter(function(test) {
  return test.status === 'passed';
});

const passedTestNames = passedTests.map(function(test) {
  return test.name;
});

console.log(passedTestNames);
