// Exercise 05: Adding Objects to an Array

const testExecution = {
  environment: 'staging',
  results: [],

  addResult(testId, status) {
    const result = {
      id: testId,
      status: status
    };

    this.results.push(result);
  }
};

testExecution.addResult('TC-001', 'passed');
testExecution.addResult('TC-002', 'failed');

console.log(testExecution.results);
// Output:
// [
//   { id: 'TC-001', status: 'passed' },
//   { id: 'TC-002', status: 'failed' }
// ]
