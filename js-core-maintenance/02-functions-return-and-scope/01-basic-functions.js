// JavaScript Core Maintenance
// Basic Functions, Parameters and Arguments

// Exercise 1: Basic function
function showTestResult() {
  console.log("Test completed.");
}

showTestResult();

// Exercise 2: One parameter
function showTestName(testName) {
  console.log(`Running test: ${testName}`);
}

showTestName("Login test");

// Exercise 3: Two parameters
function showStatusResult(testName, statusCode) {
  console.log(`${testName} returned status ${statusCode}`);
}

showStatusResult("Create user test", 201);

// Exercise 4: Function with if/else
function checkStatus(actualStatus, expectedStatus) {
  if (actualStatus === expectedStatus) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
  }
}

checkStatus(200, 200);
checkStatus(404, 200);
