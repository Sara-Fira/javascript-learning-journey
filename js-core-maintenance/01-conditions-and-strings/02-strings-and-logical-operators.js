// JavaScript Core Maintenance
// Session 2: Strings, Conditionals and Logical Operators

// Exercise 1: Exact string comparison
const actualMessage = "Login successful";
const expectedMessage = "Login successful";

if (actualMessage === expectedMessage) {
  console.log("Correct message");
} else {
  console.log("Incorrect message");
}

// Exercise 2: Case-insensitive comparison
const actualResult = "SUCCESS";
const expectedResult = "success";

if (actualResult.toLowerCase() === expectedResult.toLowerCase()) {
  console.log("Messages match");
} else {
  console.log("Messages do not match");
}

// Exercise 3: Logical OR
const statusCode = 201;

if (statusCode === 200 || statusCode === 201) {
  console.log("Success response");
} else {
  console.log("Other response");
}

// Exercise 4: Logical NOT
const errorMessage = "";

if (!errorMessage) {
  console.log("No error message");
} else {
  console.log("Error exists");
}

// Exercise 5: Credentials validation
const username = "admin";
const password = "";

if (!username || !password) {
  console.log("Missing credentials");
} else {
  console.log("Credentials provided");
}

// Exercise 6: String methods
const apiError = " Invalid Password ";

console.log(apiError.length);
console.log(apiError.trim());
console.log(apiError.toLowerCase());
console.log(apiError.toUpperCase());
console.log(apiError.includes("Password"));

// Exercise 7: Chaining string methods
const rawUsername = "  admin  ";

console.log(rawUsername.trim());
console.log(rawUsername.trim().toUpperCase());

// Exercise 8: Template literals
const currentUser = "admin";
const currentStatus = 201;

console.log(`User ${currentUser} received status ${currentStatus}`);

// Exercise 9: Combined response validation
const responseStatus = 201;
const responseMessage = "  USER CREATED SUCCESSFULLY  ";
const expectedText = "user created";
const isAuthorized = true;
const retryCount = 1;

if (
  (responseStatus === 200 || responseStatus === 201) &&
  responseMessage.trim() !== "" &&
  responseMessage.trim().toLowerCase().includes(expectedText) &&
  isAuthorized &&
  retryCount < 3
) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

// Exercise 10: Error response validation
const errorStatus = 400;
const serverMessage = " Invalid Password ";
const expectedError = "invalid password";

if (
  (errorStatus === 400 || errorStatus === 401) &&
  serverMessage.trim() !== "" &&
  serverMessage.trim().toLowerCase().includes(expectedError)
) {
  console.log("Error test passed");
} else {
  console.log("Error test failed");
}
