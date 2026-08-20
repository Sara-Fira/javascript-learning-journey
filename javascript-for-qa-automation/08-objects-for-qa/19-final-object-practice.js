// Exercise 19: Final Object Practice

const testRun = {
  name: 'Login Regression',
  environment: 'staging',
  results: [
    {
      id: 'TC-1101',
      title: 'Valid login',
      status: 'passed'
    },
    {
      id: 'TC-1102',
      title: 'Invalid password',
      status: 'failed'
    },
    {
      id: 'TC-1103',
      title: 'Locked user',
      status: 'passed'
    }
  ]
};

// Find the failed test

const failedTest = testRun.results.find(
  test => test.status === 'failed'
);

console.log(failedTest);
// Output:
// {
//   id: 'TC-1102',
//   title: 'Invalid password',
//   status: 'failed'
// }


// Extract properties with destructuring

const { id, title, status } = failedTest;

console.log(`${id}: ${title} [${status}]`);
// Output: TC-1102: Invalid password [failed]


// Return an updated copy using a function and spread syntax

function updateStatus(test, newStatus) {
  return {
    ...test,
    status: newStatus
  };
}

const retestedTest = updateStatus(failedTest, 'passed');

console.log(retestedTest);
// Output:
// {
//   id: 'TC-1102',
//   title: 'Invalid password',
//   status: 'passed'
// }

console.log(`Original status: ${failedTest.status}`);
// Output: Original status: failed

console.log(`Retested status: ${retestedTest.status}`);
// Output: Retested status: passed
