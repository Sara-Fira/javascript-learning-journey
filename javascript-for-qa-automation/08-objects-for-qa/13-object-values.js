// Exercise 13: Object.values()

const testResult = {
  id: 'TC-301',
  status: 'passed',
  priority: 'high'
};

const propertyValues = Object.values(testResult);

console.log(propertyValues);
// Output: ['TC-301', 'passed', 'high']


// Additional practice

const testSummary = {
  passed: 18,
  failed: 2,
  blocked: 1
};

const resultCounts = Object.values(testSummary);

console.log(resultCounts);
// Output: [18, 2, 1]

console.log(`Number of statuses: ${resultCounts.length}`);
// Output: Number of statuses: 3
