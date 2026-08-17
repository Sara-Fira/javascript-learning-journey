// Exercise 08: Finding a Test Result

const testRun = {
  name: 'Login Regression',
  results: [
    {
      id: 'TC-001',
      status: 'passed'
    },
    {
      id: 'TC-002',
      status: 'failed'
    },
    {
      id: 'TC-003',
      status: 'blocked'
    }
  ]
};

const foundTest = testRun.results.find((test) => {
  return test.id === 'TC-002';
});

console.log(foundTest);
// Output: { id: 'TC-002', status: 'failed' }

console.log(`Found test: ${foundTest.id} [${foundTest.status}]`);
// Output: Found test: TC-002 [failed]
