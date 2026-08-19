// Exercise 16: Copying and Updating Objects

// Copying an object

const originalTest = {
  id: 'TC-701',
  title: 'User can complete checkout',
  status: 'failed'
};

const copiedTest = {
  ...originalTest
};

console.log(copiedTest);


// Copying and updating an object

const updatedTest = {
  ...originalTest,
  status: 'passed'
};

console.log(`Original status: ${originalTest.status}`);
// Output: Original status: failed

console.log(`Updated status: ${updatedTest.status}`);
// Output: Updated status: passed


// Adding a new property

const apiTest = {
  id: 'API-101',
  method: 'GET',
  status: 'passed'
};

const testWithEnvironment = {
  ...apiTest,
  environment: 'staging'
};

console.log(testWithEnvironment);


// Combining two objects

const basicTestData = {
  id: 'TC-801',
  title: 'User can log in'
};

const executionData = {
  status: 'passed',
  environment: 'production'
};

const completeTest = {
  ...basicTestData,
  ...executionData
};

console.log(completeTest);
