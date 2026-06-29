const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

const cartTest = tests.find(function(test) {
  return test.name === 'Cart test';
});

console.log(cartTest);
