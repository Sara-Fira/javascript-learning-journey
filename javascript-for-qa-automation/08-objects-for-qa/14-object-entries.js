// Exercise 14: Object.entries()

const testResult = {
  id: 'TC-401',
  status: 'failed',
  priority: 'high'
};

const resultEntries = Object.entries(testResult);

console.log(resultEntries);
// Output:
// [
//   ['id', 'TC-401'],
//   ['status', 'failed'],
//   ['priority', 'high']
// ]

resultEntries.forEach((entry) => {
  console.log(`${entry[0]}: ${entry[1]}`);
});

// Output:
// id: TC-401
// status: failed
// priority: high
