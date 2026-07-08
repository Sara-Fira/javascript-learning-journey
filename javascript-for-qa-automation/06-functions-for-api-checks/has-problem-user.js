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

function hasProblemUser(response) {
  return response.body.users.some(function(user) {
    return user.username.includes('problem');
  });
}

console.log(hasProblemUser(response));
