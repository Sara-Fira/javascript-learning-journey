# Session 4: Array Methods Mixed Practice

This session focused on choosing the correct JavaScript array method for QA-style test data.

## Topics Covered

* `forEach()`
* `filter()`
* `find()`
* `map()`
* `some()`
* `every()`
* `.includes()`
* `filter()` + `map()`

## QA Context

We worked with test result data:

```js
const tests = [
  { name: 'Login test', status: 'passed' },
  { name: 'Checkout test', status: 'failed' },
  { name: 'Cart test', status: 'passed' },
  { name: 'Payment test', status: 'failed' }
];
```

## Key Takeaways

* `forEach()` performs an action for each item.
* `filter()` returns a new array with matching items.
* `find()` returns one matching object.
* `map()` returns a new transformed array.
* `some()` returns `true` or `false` if at least one item matches.
* `every()` returns `true` or `false` if all items match.
* `.includes()` already returns `true` or `false`.
* `forEach()` works on arrays, not on single objects.

## Useful Pattern

```js
const failedTests = tests.filter(function(test) {
  return test.status === 'failed';
});

const failedTestNames = failedTests.map(function(test) {
  return test.name;
});

console.log(failedTestNames);
```

Expected result:

```js
['Checkout test', 'Payment test']
```

## Main Goal

Practise choosing the correct method based on the expected result: array, object, transformed array, or boolean.
