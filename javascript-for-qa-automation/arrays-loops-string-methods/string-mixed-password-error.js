const errorMessage = '  EPIC SADFACE: Password is required  ';

if (errorMessage.trim().toLowerCase().includes('password is required')) {
  console.log('Password error message is displayed');
} else {
  console.log('Password error message is missing');
}
