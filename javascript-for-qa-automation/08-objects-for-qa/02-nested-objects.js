// Exercise 02: Nested Objects

const apiResponse = {
  status: 200,
  success: true,
  data: {
    id: 101,
    username: 'qa_student',
    account: {
      type: 'premium',
      active: true
    }
  }
};

console.log(apiResponse.status); // Output: 200

console.log(apiResponse.data.username); // Output: qa_student

console.log(apiResponse.data.account.type); // Output: premium

apiResponse.data.account.active = false;

const accountProperty = 'type';

console.log(apiResponse.data.account[accountProperty]); // Output: premium

console.log(apiResponse);
