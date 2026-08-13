// Exercise 06: Looping Through Test Results

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

testRun.results.forEach((result) => {
  console.log(`${result.id}: ${result.status}`);
});

// Output:
// TC-001: passed
// TC-002: failed
// TC-003: passed
