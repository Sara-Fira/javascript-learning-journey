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

const allUsernames = response.body.users.map(function(user) {
  return user.username;
});

console.log(allUsernames);
