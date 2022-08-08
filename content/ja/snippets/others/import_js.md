---
title: "Import a JavaScript library"
weight: 30
ie_support: false
---

JavaScript ライブラリを読み込みます。以下の例では jQuery を CDN から読み込んでいます。
`<script>` 要素を生成して `<head>` 要素に追加することで JavaScript を読み込めます。

（注意）サードパーティライブラリのご利用は自己責任でお願いします。

```js
const script = document.createElement('script');
/* ライブラリの URL を指定する */
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";

/* ここから下は変える必要はありません */
return new Promise((resolve, reject) => {
  script.onerror = () => {
    reject(new Error("Failed to load script"))
  }
  script.onload = () => {
    resolve()
  }

  document.head.appendChild(script);
})
```

後続の JS ステップで jQuery の関数が使えるようになります。

```js
// jQuery の使用例
return $("h1").text();
```
