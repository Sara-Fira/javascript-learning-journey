const input = require('sync-input');

const earnings = {
  "Bubblegum": 202,
  "Toffee": 118,
  "Ice cream": 2250,
  "Milk chocolate": 1680,
  "Doughnut": 1075,
  "Pancake": 80,
};
 
console.log("Earned amount:");
 
let total = 0;
 
for (const item in earnings) {
  console.log(`${item}: $${earnings[item]}`);
  total += earnings[item];
}
 
console.log(`\nIncome: $${total}.0`);

const staffExpenses = Number(input("Staff expenses:\n"));
const otherExpenses = Number(input("Other expenses:\n"));

const netIncome = total - staffExpenses - otherExpenses;

console.log(`Net income: $${netIncome}`);
