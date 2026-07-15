// JavaScript Core Maintenance
// Return Values and QA-Style Validation

// Exercise 1: Returning a string
function getStatusResult(actualStatus, expectedStatus) {
  if (actualStatus === expectedStatus) {
    return "Test passed";
  } else {
    return "Test failed";
  }
}

console.log(getStatusResult(200, 200));
console.log(getStatusResult(404, 200));

// Exercise 2: Returning a boolean
function isStatusCorrect(actualStatus, expectedStatus) {
  if (actualStatus === expectedStatus) {
    return true;
  } else {
    return false;
  }
}

const result = isStatusCorrect(201, 200);

if (result) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}

// Exercise 3: Message validation
function hasValidMessage(message) {
  if (message.trim() !== "") {
    return true;
  } else {
    return false;
  }
}

console.log(hasValidMessage(" Success "));
console.log(hasValidMessage("   "));

// Exercise 4: Successful response validation
function isSuccessfulResponse(statusCode, message) {
  if (
    (statusCode === 200 || statusCode === 201) &&
    message.trim() !== ""
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isSuccessfulResponse(201, "User created"));
console.log(isSuccessfulResponse(201, "   "));
console.log(isSuccessfulResponse(404, "Not found"));

// Exercise 5: Returning a response message
function getResponseResult(statusCode, message) {
  if (
    (statusCode === 200 || statusCode === 201) &&
    message.trim() !== ""
  ) {
    return "Valid response";
  } else {
    return "Invalid response";
  }
}

console.log(getResponseResult(200, "Success"));
console.log(getResponseResult(201, "   "));
console.log(getResponseResult(500, "Server error"));

// Exercise 6: Advanced response validator
function validateResponse(statusCode, message, isAuthorized) {
  if (!isAuthorized) {
    return "Unauthorized";
  }

  if (
    (statusCode === 200 || statusCode === 201) &&
    message.trim() !== ""
  ) {
    return "Valid response";
  }

  return "Invalid response";
}

console.log(validateResponse(200, "Success", true));
console.log(validateResponse(201, "   ", true));
console.log(validateResponse(401, "Unauthorized", false));
console.log(validateResponse(500, "Server error", true));
