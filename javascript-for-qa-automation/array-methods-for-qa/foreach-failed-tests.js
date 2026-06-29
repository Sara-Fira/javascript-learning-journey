const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

tests.forEach(test => {
  if (test.status === 'failed') {
    console.log(test.name + ' - ' + test.status);
  }
});
