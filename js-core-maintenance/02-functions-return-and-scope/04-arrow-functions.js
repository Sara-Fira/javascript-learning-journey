// JavaScript Core Maintenance
// Arrow Functions

// Exercise 1: Full arrow function with if/else
const getTestResult = (isPassed) => {
  if (isPassed) {
    return "Test passed";
  } else {
    return "Test failed";
  }
};

console.log(getTestResult(true));
console.log(getTestResult(false));

// Exercise 2: Full arrow function with return
const hasValidMessage = (message) => {
  return message.trim() !== "";
};

console.log(hasValidMessage(" Success "));
console.log(hasValidMessage("   "));

// Exercise 3: Arrow function with two parameters
const isStatusCorrect = (actualStatus, expectedStatus) => {
  return actualStatus === expectedStatus;
};

console.log(isStatusCorrect(200, 200));
console.log(isStatusCorrect(404, 200));

// Exercise 4: Implicit return
const isStatusCorrectShort = (actualStatus, expectedStatus) =>
  actualStatus === expectedStatus;

console.log(isStatusCorrectShort(200, 200));
console.log(isStatusCorrectShort(404, 200));
