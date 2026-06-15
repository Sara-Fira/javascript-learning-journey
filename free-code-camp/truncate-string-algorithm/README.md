# Truncate a String

A simple JavaScript project from freeCodeCamp.

## Description

This function shortens a string if it is longer than a given number of characters.

If the string is longer, it is cut using `.slice()` and `...` is added at the end. If it is not longer, the original string is returned.

## Technologies

* JavaScript

## What I Practiced

* String length
* `.slice()`
* Conditional statements
* Returning values from a function

## Example

```js
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }

  return str;
}
```

