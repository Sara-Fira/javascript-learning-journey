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

const userLabels = response.body.users.map(function(user) {
  if (user.isActive === true) {
    return user.username + ' - active';
  } else {
    return user.username + ' - inactive';
  }
});

console.log(userLabels);
