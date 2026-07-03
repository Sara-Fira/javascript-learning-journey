const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const allTestNamesIncludeTest = tests.every(function(test) {
  return test.name.includes('test');
});

console.log(allTestNamesIncludeTest);
