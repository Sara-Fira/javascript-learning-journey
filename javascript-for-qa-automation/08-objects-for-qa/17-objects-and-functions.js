// Exercise 17: Objects and Functions

// Passing an object to a function

const testResult = {
  id: 'TC-901',
  title: 'User can reset password',
  status: 'passed'
};

function printTestResult(test) {
  console.log(`${test.id}: ${test.title} [${test.status}]`);
}

printTestResult(testResult);
// Output: TC-901: User can reset password [passed]


// Returning an updated copy from a function

const failedTest = {
  id: 'TC-902',
  title: 'User can log in',
  status: 'failed'
};

function updateTestStatus(test, newStatus) {
  return {
    ...test,
    status: newStatus
  };
}

const passedTest = updateTestStatus(failedTest, 'passed');

console.log(failedTest);
// Output: { id: 'TC-902', title: 'User can log in', status: 'failed' }

console.log(passedTest);
// Output: { id: 'TC-902', title: 'User can log in', status: 'passed' }
