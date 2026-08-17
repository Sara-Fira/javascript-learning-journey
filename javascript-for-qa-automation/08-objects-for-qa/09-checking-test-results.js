// Exercise 09: Checking Test Results with some()

const testRun = {
  name: 'Checkout Regression',
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
      status: 'passed'
    }
  ]
};

const hasFailedTest = testRun.results.some((test) => {
  return test.status === 'failed';
});

console.log(hasFailedTest);
// Output: true

console.log(`Has failed test: ${hasFailedTest}`);
// Output: Has failed test: true
