const user = {
  username: 'standard_user',
  password: 'secret_sauce',
  expectedResult: 'success',
  actualResult: 'success'
};

const lockedOutUser = {
  username: 'locked_out_user',
  password: 'secret_sauce',
  expectedResult: 'success',
  actualResult: 'error'
};

function checkUserLogin(user) {
  if (user.actualResult === user.expectedResult) {
    console.log(`${user.username}: Login test passed`);
  } else {
    console.log(`${user.username}: Login test failed`);
  }
}

checkUserLogin(user);
checkUserLogin(lockedOutUser);
