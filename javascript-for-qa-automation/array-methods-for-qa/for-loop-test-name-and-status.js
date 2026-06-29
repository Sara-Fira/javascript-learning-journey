const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' }
];

for (let i = 0; i < tests.length; i++) {
  console.log(tests[i].name + ' - ' + tests[i].status);
}
