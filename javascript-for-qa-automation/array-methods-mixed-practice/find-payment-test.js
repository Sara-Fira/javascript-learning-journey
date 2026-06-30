const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const paymentTest = tests.find(function(test) {
  return test.name === 'Payment test';
});

console.log(paymentTest);
