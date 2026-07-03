# Session 5: JSON and API-style Response Data

This session focused on reading data from a simple API-style response object.

## Topics Covered

* reading nested object data
* reading data from an array inside an object
* checking response status
* checking array length
* using array methods with API-style data:

  * `find()`
  * `filter()`
  * `map()`
  * `some()`
  * `every()`
  * `.includes()`

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
```

## Key Takeaways

* `response.status` gives the response status code.
* `response.body.users` gives the users array.
* `response.body.users[0].username` gives the username of the first user.
* `find()` returns one matching object.
* `filter()` returns a new array with matching items.
* `map()` returns a new transformed array.
* `some()` checks if at least one item matches.
* `every()` checks if all items match.
* `.includes()` checks if a string contains specific text.

## Useful Pattern

```js
const activeUsernames = response.body.users
  .filter(function(user) {
    return user.isActive === true;
  })
  .map(function(user) {
    return user.username;
  });

console.log(activeUsernames);
```

Expected result:

```js
['standard_user', 'problem_user']
```

## Main Goal

Practise working with JSON-like API response data and choosing the correct array method based on the expected result.

