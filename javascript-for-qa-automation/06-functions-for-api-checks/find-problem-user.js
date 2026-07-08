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

function findProblemUser(response) {
  return response.body.users.find(function(user) {
    return user.username === 'problem_user';
  });
}

console.log(findProblemUser(response));
