---
title: "Get current timestamp considering timezone"
weight: 70
ie_support: true
---

Generate a timestamp that depends on the locale on execution environment.

Since the Autify test run cannot be certain of which time zone the server is in, you need to calculate the offset.

- If you want to get Japan Time: `var to_timezone = 9;`
- If you want to get Pacific Standard Time, `var to_timezone = -8;`

```js
var to_timezone = 0; /* TODO: REPLACE THE NUMBER */

var from_timezone_offset = new Date().getTimezoneOffset() * 60 * 1000;
var to_timezone_offset = to_timezone * 60 * 60 * 1000;
var date = new Date(Date.now() + from_timezone_offset + to_timezone_offset);
return date;
```
