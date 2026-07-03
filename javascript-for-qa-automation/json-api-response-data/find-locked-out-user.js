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

const lockedUser = response.body.users.find(function(user) {
  return user.username === 'locked_out_user';
});

console.log(lockedUser);
