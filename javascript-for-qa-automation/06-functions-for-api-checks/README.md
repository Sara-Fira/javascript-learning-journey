# Session 6: Functions for API-style Checks

This session focused on writing small JavaScript helper functions for API-style response data.

## Topics Covered

- writing functions with `return`
- passing `response` as a function argument
- reading nested API-style data
- returning booleans, arrays, objects, strings, and numbers
- using array methods inside functions:
  - `filter()`
  - `map()`
  - `find()`
  - `some()`
  - `every()`
  - `.includes()`

## Practice Data

```js
const response = {
  status: 200,
  body: {
    users: [
      { username: 'standard_user', isActive: true },
      { username: 'locked_out_user', isActive: false },
      { username: 'problem_user', isActive: true }
    ]
  }
};
Key Takeaways
A function can return a check result, for example true or false.
response.body.users gives access to the users array.
filter() returns matching objects.
map() transforms objects into another value, for example usernames.
some() checks if at least one item matches.
every() checks if all items match.
Function names should describe what the function returns.
Main Goal

Practise turning simple API checks into reusable JavaScript helper functions.
