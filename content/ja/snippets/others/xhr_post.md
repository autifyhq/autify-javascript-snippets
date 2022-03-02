---
title: "同期的にPOSTリクエストを送る"
weight: 10
ie_support: true
---

指定した URL に対して POST リクエストを送ります。

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
