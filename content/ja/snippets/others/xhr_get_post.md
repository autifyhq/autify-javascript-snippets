---
title: "同期的に GET / POST リクエストを送る"
weight: 10
ie_support: true
---
指定した API エンドポイント に対して GET / POST リクエストを送ります。

これらのコードはサンプルですので、ヘッダーやボディにはリクエストする API の仕様に沿って適切な値を設定してください。

HTTPリクエストを送信するのに <a href="https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest" target="_blank">XMLHttpRequest</a> を使用しています。


## 指定した URL に対して GET リクエストを送る

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
