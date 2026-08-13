// Exercise 03: Arrays of Objects

const testRun = {
  runName: 'Login Regression',
  environment: 'staging',
  testCases: [
    {
      id: 'TC-001',
      title: 'Login with valid credentials',
      status: 'passed'
    },
    {
      id: 'TC-002',
      title: 'Login with invalid password',
      status: 'failed'
    },
    {
      id: 'TC-003',
      title: 'Login with an empty username',
      status: 'not run'
    }
  ]
};

console.log(testRun.runName); // Output: Login Regression

console.log(testRun.testCases[0].title);
// Output: Login with valid credentials

console.log(testRun.testCases[1].status); // Output: failed

testRun.testCases[2].status = 'passed';

testRun.testCases.push({
  id: 'TC-004',
  title: 'Login with a locked account',
  status: 'not run'
});

console.log(testRun.testCases);
