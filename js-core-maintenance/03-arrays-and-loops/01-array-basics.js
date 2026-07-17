// JavaScript Core Maintenance
// Session 3 — Array Basics

// Exercise 1: Accessing array elements

const statusCodes = [200, 201, 404];

console.log(statusCodes[0]);
console.log(statusCodes[statusCodes.length - 1]);
console.log(statusCodes.length);

// Exercise 2: Changing an array element

const testResults = ["passed", "failed", "passed"];

testResults[1] = "passed";

console.log(testResults);
console.log(testResults.length);

// Exercise 3: push() and pop()

const errors = ["Invalid password"];

errors.push("User not found");
console.log(errors);

const removedError = errors.pop();

console.log(errors);
console.log(removedError);
console.log(errors.length);

// Exercise 4: Checking whether an array is empty

const defects = [];

if (defects.length === 0) {
  console.log("No defects found");
} else {
  console.log("Defects exist");
}

// Exercise 5: Returning the last array element

const getLastStatus = (statusCodes) => {
  return statusCodes[statusCodes.length - 1];
};

console.log(getLastStatus([200, 201, 404]));
console.log(getLastStatus([500, 503]));

// Exercise 6: First and last element

const users = ["admin", "tester", "guest", "developer"];

console.log(users[0]);
console.log(users[users.length - 1]);

// Exercise 7: Checking whether failed tests exist

const failedTests = ["Login test", "Checkout test"];

if (failedTests.length >= 1) {
  console.log("Some tests failed");
} else {
  console.log("All tests passed");
}

// Exercise 8: Modifying and validating a test queue

const testQueue = ["Login test", "Checkout test"];

testQueue.push("Logout test");
testQueue[0] = "Admin login test";

const removedTest = testQueue.pop();

console.log(testQueue);
console.log(removedTest);
console.log(testQueue.length);

if (testQueue.length === 2) {
  console.log("Queue ready");
} else {
  console.log("Check test queue");
}

// Exercise 9: Final array challenge

const finalTestQueue = ["Login test", "Checkout test"];
const finalFailedTests = ["Checkout test"];

const prepareTestQueue = (testQueue, failedTests) => {
  testQueue.push("Logout test");
  testQueue[0] = "Admin login test";

  const removedTest = testQueue.pop();

  if (
    testQueue.length === 2 &&
    failedTests.length >= 1 &&
    removedTest === "Logout test"
  ) {
    return "Queue prepared with failed tests";
  } else {
    return "Queue validation failed";
  }
};

console.log(prepareTestQueue(finalTestQueue, finalFailedTests));
console.log(finalTestQueue);
