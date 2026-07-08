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

function hasUsers(response) {
  return response.body.users.length > 0;
}

console.log(hasUsers(response));
