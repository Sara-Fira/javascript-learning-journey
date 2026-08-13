// Exercise 04: Object Methods and this

const testCase = {
  id: 'TC-005',
  title: 'User can reset the password',
  status: 'not run',

  getSummary() {
    return `${this.id}: ${this.title} [${this.status}]`;
  },

  updateStatus(newStatus) {
    this.status = newStatus;
  }
};

console.log(testCase.getSummary());
// Output: TC-005: User can reset the password [not run]

testCase.updateStatus('passed');

console.log(testCase.getSummary());
// Output: TC-005: User can reset the password [passed]
