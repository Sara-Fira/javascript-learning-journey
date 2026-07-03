const users = [
  { username: 'standard_user', isActive: true },
  { username: 'locked_out_user', isActive: false },
  { username: 'problem_user', isActive: true }
];

const usersWithUserInName = users.filter(function(user) {
  return user.username.includes('_user');
});

console.log(usersWithUserInName);
