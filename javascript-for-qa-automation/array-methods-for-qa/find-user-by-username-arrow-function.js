const users = [
  { username: 'standard_user', isActive: true },
  { username: 'locked_out_user', isActive: false },
  { username: 'problem_user', isActive: true }
];

const lockedOutUser = users.find(user => user.username === 'locked_out_user');

console.log(lockedOutUser);
