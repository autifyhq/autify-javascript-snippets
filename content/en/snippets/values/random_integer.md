---
title: "Generate random integer"
weight: 50
ie_support: true
---

Use this snippet to create a random number.

Change the following values to fit your test case:

- `digit`: Number of digits of random number

```js
var digit = 10; /* TODO: REPLACE NUMBER */
return (
  Math.floor(Math.random() * (9 * Math.pow(10, digit - 1))) +
  Math.pow(10, digit - 1)
);
```
