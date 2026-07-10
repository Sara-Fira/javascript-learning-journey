# Session 7: Async/Await Basics for QA

This session introduced the basic `async/await` pattern in JavaScript.

## Topics Covered

- `async function`
- `await`
- returning values from async functions
- saving awaited results into variables
- simple QA-style checks
- fake API-style response object

## Key Idea

`await` means: wait for the result before continuing.

Example:

```js
async function getStatusCode() {
  return 200;
}

async function runTest() {
  const statusCode = await getStatusCode();

  console.log(statusCode === 200);
}

runTest();
