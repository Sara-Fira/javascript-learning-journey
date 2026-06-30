const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];

const hasFailedPaymentTest = tests.some(function(test) {
  return test.status === 'failed' && test.name.includes('Payment');
});

console.log(hasFailedPaymentTest);
