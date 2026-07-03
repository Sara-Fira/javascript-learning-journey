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

const activeUsers = response.body.users.filter(function(user) {
  return user.isActive === true;
});

console.log(activeUsers);
