const response = {
  status: 200,
  body: {
    users: [
      { username: 'standard_user', isActive: true },
      { username: 'locked_out_user', isActive: false },
      { username: 'problem_user', isActive: true }
    ]
  }
};

const isFirstUsernameCorrect = response.body.users[0].username === 'standard_user';

console.log(isFirstUsernameCorrect);
