const username = '';
const password = 'secret_sauce';

const expectedErrorMessage = 'Epic sadface: Username is required';
const actualErrorMessage = 'Epic sadface: Username is required';

if (username === '') {
  console.log('Username is missing');
} else {
  console.log('Username is provided');
}

if (actualErrorMessage === expectedErrorMessage) {
  console.log('Error message test passed');
} else {
  console.log('Error message test failed');
}
