const users = [
  { username: 'standard_user', isActive: true },
  { username: 'locked_out_user', isActive: false },
  { username: 'problem_user', isActive: true }
];

const usernames = users.map(function(user) {
  return user.username;
});

console.log(usernames);
