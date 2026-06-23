# Session 1: Variables, Conditionals, Functions and Objects

Learning path: JavaScript for QA Automation / Playwright foundations

## Goal

Practise basic JavaScript logic in a QA testing context.

## Topics Practised

* variables
* `if/else`
* `===` and `!==`
* `&&`
* functions
* `return true / false`
* objects
* dot notation
* template literals

## QA Context

The exercises used simple testing examples:

* login result validation
* error message validation
* status code checks
* user access checks
* user test data stored in objects
* reusable validation helpers

## Key Pattern

```js
if (actual === expected) {
  console.log('Test passed');
} else {
  console.log('Test failed');
}
```

This is the basic idea behind comparing actual and expected results in tests.

## Examples Practised

```js
checkLoginResult('success', 'success');
checkStatusCode(200, 200);
checkErrorMessage(
  'Epic sadface: Username is required',
  'Epic sadface: Username is required'
);
```

## Main Takeaways

* `if` checks whether a condition is true.
* `actual === expected` means the test result matches the expected result.
* Functions help avoid repeating the same validation logic.
* `return` gives a value back from a function.
* Objects are useful for storing test data, such as users and expected results.
* Dot notation, such as `user.username`, is used to access data from an object.

## Notes

This session is part of my JavaScript learning path focused on QA Automation and future Playwright testing.
