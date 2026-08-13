// Exercise 01: Basic Object Properties

const testUser = {
  username: 'qa_student',
  role: 'tester',
  active: false
};

console.log(testUser.username); // Output: qa_student

testUser.active = true;

const propertyToCheck = 'role';

console.log(testUser[propertyToCheck]); // Output: tester

console.log(testUser);
// Output: { username: 'qa_student', role: 'tester', active: true }
