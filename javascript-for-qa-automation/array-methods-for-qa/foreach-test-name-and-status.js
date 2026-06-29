const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

tests.forEach(function(test) {
  console.log(test.name + ' - ' + test.status);
});
