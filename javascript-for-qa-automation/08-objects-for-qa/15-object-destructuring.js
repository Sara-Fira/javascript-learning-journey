// Exercise 15: Object Destructuring

// Basic object destructuring

const testResult = {
  id: 'TC-501',
  title: 'User can add a product to the cart',
  status: 'passed',
  priority: 'high'
};

const { id, status } = testResult;

console.log(`Test ${id}: ${status}`);
// Output: Test TC-501: passed


// Destructuring API response data

const apiResponse = {
  statusCode: 201,
  message: 'User created successfully',
  responseTime: 420
};

const { statusCode, message } = apiResponse;

console.log(`Status ${statusCode}: ${message}`);
// Output: Status 201: User created successfully


// Renaming variables during destructuring

const bugReport = {
  id: 'BUG-101',
  severity: 'critical',
  status: 'open'
};

const {
  id: bugId,
  severity: bugSeverity
} = bugReport;

console.log(`Bug ${bugId}: ${bugSeverity}`);
// Output: Bug BUG-101: critical


// Using a default value

const testExecution = {
  id: 'RUN-001',
  status: 'completed'
};

const {
  id: executionId,
  environment = 'staging'
} = testExecution;

console.log(`${executionId} environment: ${environment}`);
// Output: RUN-001 environment: staging
