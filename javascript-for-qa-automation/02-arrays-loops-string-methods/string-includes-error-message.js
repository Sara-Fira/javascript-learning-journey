const errorMessage = 'Epic sadface: Username is required';

if (errorMessage.includes('Username is required')) {
  console.log('Error message contains expected text');
} else {
  console.log('Error message does not contain expected text');
}
