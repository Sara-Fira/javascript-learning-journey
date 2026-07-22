// Exercise 1: Access object properties

const response = {
  statusCode: 200,
  message: "Success",
  userId: 15
};

console.log(response.statusCode);
console.log(response.message);
console.log(response.userId);


// Exercise 2: Modify and add properties

const createdUserResponse = {
  statusCode: 200,
  message: "Success",
  userId: 15
};

createdUserResponse.message = "User created";
createdUserResponse.isSuccessful = true;

console.log(createdUserResponse);


// Exercise 3: Validate object properties

const validationResponse = {
  statusCode: 201,
  message: "User created",
  isSuccessful: true
};

if (
  validationResponse.statusCode === 201 &&
  validationResponse.isSuccessful === true
) {
  console.log("Valid response");
} else {
  console.log("Invalid response");
}


// Exercise 4: Delete a property

const responseWithDebugInfo = {
  statusCode: 200,
  message: "OK",
  debugInfo: "temporary data"
};

delete responseWithDebugInfo.debugInfo;

console.log(responseWithDebugInfo);


// Exercise 5: Check whether a property exists

const messageResponse = {
  statusCode: 200,
  message: "OK"
};

console.log("message" in messageResponse);
console.log("error" in messageResponse);
