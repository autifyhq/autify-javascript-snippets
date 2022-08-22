---
title: "遅延（awaitを利用）"
weight: 10
ie_support: false
---

指定した秒数の間待機/スリープを行う delay 関数です。

```js
function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

return (async () => {
  // 処理の解決を待つために
  // Promise オブジェクトを返す必要があります。
  // このスコープの中にコードを書き込んでください。

  // 例:
  console.log(Date.now());
  await delay(1);
  console.log(Date.now());
})();
```
