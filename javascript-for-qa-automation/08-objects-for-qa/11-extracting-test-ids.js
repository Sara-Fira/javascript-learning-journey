// Exercise 11: Extracting Test IDs with map()

const testResults = [
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
];

const testIds = testResults.map((test) => {
  return test.id;
});

console.log(testIds);
// Output: ['TC-001', 'TC-002', 'TC-003']
