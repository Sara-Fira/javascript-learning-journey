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

function hasInactiveUsers(response) {
  return response.body.users.some(function(user) {
    return !user.isActive;
  });
}

console.log(hasInactiveUsers(response));
