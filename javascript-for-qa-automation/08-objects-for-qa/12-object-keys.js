// Exercise 12: Object.keys()

const testCase = {
  id: 'TC-201',
  title: 'User can update profile',
  status: 'passed',
  priority: 'high'
};

const propertyNames = Object.keys(testCase);

console.log(propertyNames);
// Output: ['id', 'title', 'status', 'priority']


// Additional practice

const apiResponse = {
  statusCode: 200,
  message: 'Success',
  responseTime: 350,
  valid: true
};

const responseFields = Object.keys(apiResponse);

console.log(responseFields);
// Output: ['statusCode', 'message', 'responseTime', 'valid']

console.log(`Number of fields: ${responseFields.length}`);
// Output: Number of fields: 4
