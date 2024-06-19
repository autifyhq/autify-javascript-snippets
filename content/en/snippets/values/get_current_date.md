---
title: "Get date and time string"
weight: 70
ie_support: true
---

Returns the date and time as a string in ISO format (e.g., 2024-06-19T12:34:56.789Z) according to the environment in which the test was run.

Since the Autify test run cannot be certain of which time zone the server is in, you need to calculate the offset.

- If you want to get Japan Time: `var to_timezone = 9;`
- If you want to get Pacific Standard Time, `var to_timezone = -8;`

```js
var to_timezone = 0; /* TODO: REPLACE THE NUMBER */

var from_timezone_offset = new Date().getTimezoneOffset() * 60 * 1000;
var to_timezone_offset = to_timezone * 60 * 60 * 1000;
var date = new Date(Date.now() + from_timezone_offset + to_timezone_offset);
return date.toJSON();
```
