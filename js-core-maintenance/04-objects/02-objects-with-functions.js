// Exercise 1: Return one property

function getResponseMessage(response) {
  return response.message;
}

console.log(
  getResponseMessage({
    statusCode: 200,
    message: "OK"
  })
);


// Exercise 2: Return boolean based on a property

function isSuccessfulResponse(response) {
  if (response.statusCode === 200) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isSuccessfulResponse({
    statusCode: 200,
    message: "OK"
  })
);

console.log(
  isSuccessfulResponse({
    statusCode: 404,
    message: "Not found"
  })
);


// Exercise 3: Return a user status message

function getUserStatus(user) {
  if (user.isActive === true) {
    return "User is active";
  } else {
    return "User is inactive";
  }
}

console.log(
  getUserStatus({
    username: "admin",
    isActive: true
  })
);

console.log(
  getUserStatus({
    username: "guest",
    isActive: false
  })
);


// Exercise 4: Add a property and return the object

function addPriority(testCase) {
  testCase.priority = "high";
  return testCase;
}

const loginTestCase = {
  title: "Valid login",
  status: "passed"
};

console.log(addPriority(loginTestCase));


// Exercise 5: Modify an object and return a summary

function markAsPassed(testCase) {
  testCase.status = "passed";

  return `${testCase.title}: ${testCase.status}`;
}

const checkoutTestCase = {
  title: "Checkout test",
  status: "failed"
};

console.log(markAsPassed(checkoutTestCase));


// Exercise 6: Add a validation result

function addValidationResult(response) {
  if (
    response.statusCode === 201 &&
    response.message === "Created"
  ) {
    response.isValid = true;
  } else {
    response.isValid = false;
  }

  return response;
}

const createdResponse = {
  statusCode: 201,
  message: "Created"
};

console.log(addValidationResult(createdResponse));


// Exercise 7: Remove debug information

function removeDebugInfo(response) {
  delete response.debugInfo;
  return response;
}

console.log(
  removeDebugInfo({
    statusCode: 200,
    message: "OK",
    debugInfo: "temporary data"
  })
);
