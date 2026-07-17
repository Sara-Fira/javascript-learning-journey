// JavaScript Core Maintenance
// Session 3 — Loops with Arrays

// Exercise 1: Basic for loop

const testNames = ["Login", "Checkout", "Logout"];

for (let i = 0; i < testNames.length; i++) {
  console.log(testNames[i]);
}

// Exercise 2: Numbering test results

const results = ["passed", "failed", "passed", "failed"];

for (let i = 0; i < results.length; i++) {
  console.log(`Test ${i + 1}: ${results[i]}`);
}

// Exercise 3: Counting passed tests

const executionResults = [
  "passed",
  "failed",
  "passed",
  "failed",
  "passed"
];

let passedCount = 0;

for (let i = 0; i < executionResults.length; i++) {
  if (executionResults[i] === "passed") {
    passedCount++;
  }
}

console.log(`Passed tests: ${passedCount}`);

// Exercise 4: Classifying status codes

const responseStatusCodes = [200, 201, 500, 404, 201];

for (let i = 0; i < responseStatusCodes.length; i++) {
  if (
    responseStatusCodes[i] === 200 ||
    responseStatusCodes[i] === 201
  ) {
    console.log(`${responseStatusCodes[i]} -> Success status`);
  } else {
    console.log(`${responseStatusCodes[i]} -> Error status`);
  }
}

// Exercise 5: Counting error status codes

const statusCodesToCount = [200, 201, 500, 404, 201, 503];

let errorCount = 0;

for (let i = 0; i < statusCodesToCount.length; i++) {
  if (
    statusCodesToCount[i] !== 200 &&
    statusCodesToCount[i] !== 201
  ) {
    errorCount++;
  }
}

console.log(`Error statuses: ${errorCount}`);
