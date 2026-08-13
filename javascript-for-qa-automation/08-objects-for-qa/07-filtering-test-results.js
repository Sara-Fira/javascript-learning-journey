// Exercise 07: Filtering Test Results

const testRun = {
  name: 'User Management Regression',
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
    },
    {
      id: 'TC-004',
      status: 'failed'
    }
  ]
};

const failedTests = testRun.results.filter(
  test => test.status === 'failed'
);

console.log(failedTests);
// Output:
// [
//   { id: 'TC-002', status: 'failed' },
//   { id: 'TC-004', status: 'failed' }
// ]

failedTests.forEach((test) => {
  console.log(`Failed test: ${test.id}`);
});

// Output:
// Failed test: TC-002
// Failed test: TC-004
