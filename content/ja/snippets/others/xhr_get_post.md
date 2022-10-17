---
title: "同期的に GET / POST リクエストを送る"
weight: 10
ie_support: true
---
これらのスニペットは、APIエンドポイントにHTTPリクエストを送信する際に使用します。

ヘッダーとボディに設定されている値は例です。実際の値は、リクエストされるAPIの仕様に依存します。適切な値を設定してください。

HTTPリクエストを送信するのに <a href="https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest" target="_blank">XMLHttpRequest</a> を使用しています。


## 指定した URL に対して GET リクエストを送る

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


## 指定した URL に対して POST リクエストを送る

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
