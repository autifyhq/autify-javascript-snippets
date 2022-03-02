---
title: "Send POST request synchronously"
weight: 10
ie_support: true
---

Send POST request to a URL. Use this snippet when you want to send a HTTP request to an API endpoint.

```js
var url = "API URL";
var xhr = new XMLHttpRequest();

xhr.open("POST", url, false);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("key=value");

if (xhr.status !== 200) {
  throw new Error("Error " + xhr.status);
}

console.log(JSON.parse(xhr.response));
```
