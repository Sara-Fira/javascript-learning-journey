# Confirm the Ending

A simple JavaScript project from freeCodeCamp.

## Description

This function checks if a string ends with a given target string.

## Technologies

* JavaScript

## What I Practiced

* String methods
* `.slice()`
* Boolean return values

## Example

```js
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
```

## Note

The `.endsWith()` method was not used because the task required using a substring method.

