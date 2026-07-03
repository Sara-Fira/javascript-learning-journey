const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const hasCheckoutTest = tests.some(function(test) {
  return test.name.includes('Checkout');
});

console.log(hasCheckoutTest);
