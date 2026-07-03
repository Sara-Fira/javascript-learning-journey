const expectedErrorMessage = 'Epic sadface: Username is required';
const actualErrorMessage = 'Epic sadface: Username is required';
const actualErrorMessage2 = 'Invalid password';

if (actualErrorMessage === expectedErrorMessage) {
  console.log('Error message test passed');
} else {
  console.log('Error message test failed');
}

if (actualErrorMessage2 === expectedErrorMessage) {
  console.log('Error message test passed');
} else {
  console.log('Error message test failed');
}
