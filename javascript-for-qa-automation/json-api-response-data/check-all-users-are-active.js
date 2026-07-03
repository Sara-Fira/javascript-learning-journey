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

const allUsersAreActive = response.body.users.every(function(user) {
  return user.isActive === true;
});

console.log(allUsersAreActive);
