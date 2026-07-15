// JavaScript Core Maintenance
// Session 1: Variables, Data Types and Truthy/Falsy

// Exercise 1: const and let
const expectedStatus = 200;
let actualStatus = 404;

actualStatus = 200;

if (actualStatus === expectedStatus) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

// Exercise 2: Data types and typeof
const statusCode = 200;
const responseMessage = "Success";
const isTestPassed = true;
const responseData = null;
let responseBody;

console.log(typeof statusCode); // number
console.log(typeof responseMessage); // string
console.log(typeof isTestPassed); // boolean
console.log(typeof responseData); // object
console.log(typeof responseBody); // undefined

// Exercise 3: Truthy and falsy values
const errorMessage = "";

if (errorMessage) {
  console.log("Error message exists");
} else {
  console.log("No error message");
}

// Exercise 4: Empty array
const users = [];

if (users) {
  console.log("Users array exists");
}

if (users.length === 0) {
  console.log("Users array is empty");
}

// Exercise 5: Strict comparison and different types
const actualCode = "200";
const expectedCode = 200;

if (actualCode === expectedCode) {
  console.log("Codes match");
} else {
  console.log("Codes do not match");
}

// Exercise 6: Changing a variable value
let loginAttempts = 0;

loginAttempts = loginAttempts + 1;

console.log(loginAttempts);
