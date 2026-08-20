// Exercise 18: Object References

// Assigning the same object reference

const originalTest = {
  id: 'TC-1001',
  status: 'failed'
};

const assignedTest = originalTest;

assignedTest.status = 'passed';

console.log(`Original status: ${originalTest.status}`);
// Output: Original status: passed

console.log(`Assigned status: ${assignedTest.status}`);
// Output: Assigned status: passed


// Creating an independent copy with spread syntax

const originalBug = {
  id: 'BUG-201',
  status: 'open',
  severity: 'high'
};

const copiedBug = {
  ...originalBug
};

copiedBug.status = 'closed';

console.log(`Original bug: ${originalBug.status}`);
// Output: Original bug: open

console.log(`Copied bug: ${copiedBug.status}`);
// Output: Copied bug: closed
