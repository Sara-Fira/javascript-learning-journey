function checkLoginResult(actualResult, expectedResult) {
  if (actualResult === expectedResult) {
    console.log('Login test passed');
  } else {
    console.log('Login test failed');
  }
}

function checkStatusCode(actualStatusCode, expectedStatusCode) {
  if (actualStatusCode === expectedStatusCode) {
    console.log('Status code test passed');
  } else {
    console.log('Status code test failed');
  }
}

function checkErrorMessage(actualMessage, expectedMessage) {
  if (actualMessage === expectedMessage) {
    console.log('Error message test passed');
  } else {
    console.log('Error message test failed');
  }
}

checkLoginResult('success', 'success');
checkLoginResult('error', 'success');

checkStatusCode(200, 200);
checkStatusCode(404, 200);

checkErrorMessage(
  'Epic sadface: Username is required',
  'Epic sadface: Username is required'
);

checkErrorMessage(
  'Invalid password',
  'Epic sadface: Username is required'
);
