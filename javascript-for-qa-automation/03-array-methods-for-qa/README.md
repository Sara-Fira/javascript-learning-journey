# Session 3: Array Methods for QA

This session focused on practising JavaScript array methods using QA-style test data.

## Topics covered

* `forEach()`
* `filter()`
* `find()`
* `map()`
* classic function syntax
* arrow function syntax
* using conditions inside array methods

## QA context

The exercises used simple data examples such as:

* test results
* passed and failed tests
* active and inactive users
* finding a specific user
* creating summary labels from test data

## Key patterns

```js
array.forEach(item => {
  console.log(item.property);
});
```

```js
const filteredItems = array.filter(item => item.property === expectedValue);
```

```js
const foundItem = array.find(item => item.property === expectedValue);
```

```js
const mappedItems = array.map(item => item.property);
```

## Key takeaway

Array methods are useful in QA automation for working with lists of test results, users, bugs, products, and API response data.
`forEach()` performs an action, `filter()` returns matching items, `find()` returns the first matching item, and `map()` creates a new transformed array.
