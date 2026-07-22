// Exercise 1: Validate an API response

function validateResponse(response) {
  if (
    response.statusCode === 200 &&
    response.message === "OK" &&
    response.responseTime < 1000
  ) {
    return "Response valid";
  } else {
    return "Response invalid";
  }
}

console.log(
  validateResponse({
    statusCode: 200,
    message: "OK",
    responseTime: 450
  })
);


// Exercise 2: Validate user access

function canRunTests(user) {
  if (user.role === "tester" && user.isActive === true) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

console.log(
  canRunTests({
    username: "admin",
    role: "tester",
    isActive: true
  })
);


// Exercise 3: Check whether a message property exists

function hasMessage(response) {
  if ("message" in response) {
    return true;
  } else {
    return false;
  }
}

console.log(
  hasMessage({
    statusCode: 200,
    message: "OK"
  })
);

console.log(
  hasMessage({
    statusCode: 404
  })
);


// Exercise 4: Return an error message if it exists

function getErrorMessage(response) {
  if ("error" in response) {
    return response.error;
  } else {
    return "No error message";
  }
}

console.log(
  getErrorMessage({
    statusCode: 400,
    error: "Invalid request"
  })
);

console.log(
  getErrorMessage({
    statusCode: 200
  })
);


// Exercise 5: Check whether retry is allowed

function getRetryMessage(response) {
  if (
    "retryAllowed" in response &&
    response.retryAllowed === true
  ) {
    return "Retry request";
  } else {
    return "Do not retry";
  }
}

console.log(
  getRetryMessage({
    statusCode: 500,
    error: "Internal server error",
    retryAllowed: true
  })
);


// Exercise 6: Create a response summary

function getResponseSummary(response) {
  return `Status: ${response.statusCode}, Message: ${response.message}, Time: ${response.responseTime} ms`;
}

console.log(
  getResponseSummary({
    statusCode: 200,
    message: "OK",
    responseTime: 350
  })
);


// Exercise 7: Create a test case summary

function getTestCaseSummary(testCase) {
  return `${testCase.title} | ${testCase.status} | ${testCase.priority}`;
}

console.log(
  getTestCaseSummary({
    title: "Login test",
    status: "passed",
    priority: "high"
  })
);


// Exercise 8: Validate a complete test case

function validateTestCase(testCase) {
  if (
    testCase.title !== "" &&
    (
      testCase.status === "passed" ||
      testCase.status === "failed"
    ) &&
    (
      testCase.priority === "high" ||
      testCase.priority === "medium" ||
      testCase.priority === "low"
    )
  ) {
    return "Test case valid";
  } else {
    return "Test case invalid";
  }
}

console.log(
  validateTestCase({
    title: "Checkout test",
    status: "passed",
    priority: "high"
  })
);
