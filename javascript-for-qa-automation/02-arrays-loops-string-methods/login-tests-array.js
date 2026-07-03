const users = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    expectedResult: 'success',
    actualResult: 'success'
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    expectedResult: 'success',
    actualResult: 'error'
  },
  {
    username: 'problem_user',
    password: 'secret_sauce',
    expectedResult: 'success',
    actualResult: 'success'
  }
];

function checkLoginTest(user) {
  if (user.actualResult === user.expectedResult) {
    console.log(`${user.username}: Login test passed`);
  } else {
    console.log(`${user.username}: Login test failed`);
  }
}

checkLoginTest(users[0]);
checkLoginTest(users[1]);
checkLoginTest(users[2]);
