function isExpectedText(actualText, expectedText) {
  if (actualText === expectedText) {
    return true;
  } else {
    return false;
  }
}

function isExpectedStatusCode(actualStatusCode, expectedStatusCode) {
  if (actualStatusCode === expectedStatusCode) {
    return true;
  } else {
    return false;
  }
}

console.log(isExpectedText('Products', 'Products'));
console.log(isExpectedText('Login', 'Products'));

console.log(isExpectedStatusCode(200, 200));
console.log(isExpectedStatusCode(404, 200));
