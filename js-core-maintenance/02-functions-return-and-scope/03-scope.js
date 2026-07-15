// JavaScript Core Maintenance
// Global Scope, Function Scope and Block Scope

// Exercise 1: Global and function scope
const environment = "QA";

function runTest() {
  const testName = "Login test";

  console.log(environment);
  console.log(testName);
}

runTest();

console.log(environment);

// This would cause ReferenceError because testName
// exists only inside runTest():
// console.log(testName);

// Exercise 2: Block scope
function checkResult(isPassed) {
  if (isPassed) {
    const message = "Test passed";
    console.log(message);
  }

  // This would cause ReferenceError because message
  // exists only inside the if block:
  // console.log(message);
}

checkResult(true);

// Exercise 3: One variable shared across blocks
function getResult(isPassed) {
  let result;

  if (isPassed) {
    result = "Passed";
  } else {
    result = "Failed";
  }

  return result;
}

console.log(getResult(true));
console.log(getResult(false));

// Important:
// let result = "Passed"; creates a new variable.
// result = "Passed"; changes the existing variable.
