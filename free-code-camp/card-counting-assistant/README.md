# Card Counting Assistant

This is a beginner JavaScript lab from freeCodeCamp.

The goal of this project is to build a simple card counting assistant for Blackjack.

## What it does

The program keeps track of a card count and gives a betting suggestion based on the current count.

Rules:

* cards `2`, `3`, `4`, `5`, `6` increase the count by `1`
* cards `7`, `8`, `9` do not change the count
* cards `10`, `"J"`, `"Q"`, `"K"`, `"A"` decrease the count by `1`

If the count is positive, the function returns `Bet`.
If the count is zero or negative, the function returns `Hold`.

Example:

```js
cardCounter(6);
```

Output:

```js
"5 Bet"
```

## What I practiced

* Using a global variable
* Creating functions
* Working with numbers and strings
* Using conditional logic
* Updating variable values
* Returning dynamic strings

## Project status

Completed as part of my JavaScript learning journey.

