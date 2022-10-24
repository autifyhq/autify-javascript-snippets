---
title: "Send GET / POST request synchronously"
weight: 10
ie_support: true
---
Sends a GET / POST request to the specified API endpoint.

Since these codes are samples, please set appropriate values for the header and body according to the specifications of the API to be requested.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank">XMLHttpRequest</a> is used to send HTTP requests.

## Send GET request to a URL

```js
var url = "API URL";
var xhr = new XMLHttpRequest();

xhr.open("GET", url, false);
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
