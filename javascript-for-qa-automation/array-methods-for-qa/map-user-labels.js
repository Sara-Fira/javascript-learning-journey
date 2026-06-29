const users = [
  { username: 'standard_user', isActive: true },
  { username: 'locked_out_user', isActive: false },
  { username: 'problem_user', isActive: true }
];

const userLabels = users.map(function(user) {
  if (user.isActive) {
    return user.username + ' - active';
  }

  return user.username + ' - inactive';
});

console.log(userLabels);
