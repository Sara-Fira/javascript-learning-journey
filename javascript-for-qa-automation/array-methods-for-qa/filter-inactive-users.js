const users = [
  { username: 'standard_user', isActive: true },
  { username: 'locked_out_user', isActive: false },
  { username: 'problem_user', isActive: true }
];

const inactiveUsers = users.filter(function(user) {
  return user.isActive === false;
});

console.log(inactiveUsers);
