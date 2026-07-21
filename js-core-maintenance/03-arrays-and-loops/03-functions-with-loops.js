// JavaScript Core Maintenance
// Session 4 — Functions with Loops

// Exercise 1: Count passed and failed tests

const results = ["passed", "failed", "passed", "failed", "passed"];

let passedCount = 0;
let failedCount = 0;

for (let i = 0; i < results.length; i++) {
  if (results[i] === "passed") {
    passedCount++;
  } else {
    failedCount++;
  }
}

console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);


// Exercise 2: Count failed tests using a function

function countFailedTests(results) {
  let failedCount = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === "failed") {
      failedCount++;
    }
  }

  return failedCount;
}

console.log(
  countFailedTests(["passed", "failed", "failed", "passed"])
);
// 2


// Exercise 3: Check whether an error status exists

function hasErrorStatus(statusCodes) {
  for (let i = 0; i < statusCodes.length; i++) {
    if (statusCodes[i] !== 200 && statusCodes[i] !== 201) {
      return true;
    }
  }

  return false;
}

console.log(hasErrorStatus([200, 201, 200]));
// false

console.log(hasErrorStatus([200, 500, 201]));
// true


// Exercise 4: Check whether all tests passed

function allTestsPassed(results) {
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "failed") {
      return false;
    }
  }

  return true;
}

console.log(allTestsPassed(["passed", "passed", "passed"]));
// true

console.log(allTestsPassed(["passed", "failed", "passed"]));
// false


// Exercise 5: Check whether at least one test passed

function hasPassedTest(results) {
  for (let i = 0; i < results.length; i++) {
    if (results[i] === "passed") {
      return true;
    }
  }

  return false;
}

console.log(hasPassedTest(["failed", "failed", "passed"]));
// true

console.log(hasPassedTest(["failed", "failed"]));
// false


// Exercise 6: Count success status codes

function countSuccessStatuses(statusCodes) {
  let codesCounter = 0;

  for (let i = 0; i < statusCodes.length; i++) {
    if (statusCodes[i] === 200 || statusCodes[i] === 201) {
      codesCounter++;
    }
  }

  return codesCounter;
}

console.log(countSuccessStatuses([200, 201, 500, 200, 404]));
// 3


// Exercise 7: Count failed results

function countFailedResults(results) {
  let counter = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === "failed") {
      counter++;
    }
  }

  return counter;
}

console.log(
  countFailedResults(["passed", "failed", "passed", "failed"])
);
// 2


// Exercise 8: Return a failed tests summary

function getFailedTestsSummary(results) {
  let counter = 0;

  for (let i = 0; i < results.length; i++) {
    if (results[i] === "failed") {
      counter++;
    }
  }

  return `Failed tests: ${counter}`;
}

console.log(
  getFailedTestsSummary(["passed", "failed", "passed", "failed"])
);
// Failed tests: 2
