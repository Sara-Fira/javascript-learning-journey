// Exercise 10: Checking All Test Results with every()

const testResults = [
  {
    id: 'TC-001',
    automated: true
  },
  {
    id: 'TC-002',
    automated: true
  },
  {
    id: 'TC-003',
    automated: false
  }
];

const allAutomated = testResults.every((test) => {
  return test.automated === true;
});

console.log(`All tests automated: ${allAutomated}`);
// Output: All tests automated: false
