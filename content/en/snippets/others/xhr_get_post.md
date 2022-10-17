---
title: "Send GET / POST request synchronously"
weight: 10
ie_support: true
---
Use these snippets when you want to send a HTTP request to an API endpoint.

The values set in the header and body are examples. The actual values depend on the specification of the API being requested. Please set appropriate values.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank">XMLHttpRequest</a> is used to send HTTP requests.

## Send GET request to a URL

```js
var url = "API URL";
var xhr = new XMLHttpRequest();

xhr.open("GET", url, false);
xhr.setRequestHeader("Accept", "application/json");
xhr.send();

if (xhr.status !== 200) {
  throw new Error("Error " + xhr.status);
}

console.log(JSON.parse(xhr.response));
```

## Send POST request to a URL

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
