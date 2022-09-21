---
title: "テーブル内をテキストで検索し見つかった行の特定の列を操作する"
weight: 10
ie_support: false
---

テーブル内をテキストで検索し、見つかった行の特定の列に対してテキストを取得したり、クリックするなどの操作を行います。

```js
const targetText = ""; //TODO: 探したいテキストを指定してください
const columnNum = ""; //TODO: 指定したテキストを持つ行の何列目を対象とするか指定してください

const tagName = "td";
const candidates = document.getElementsByTagName(tagName);
const filtered = Array.from(candidates).filter((el) => el.innerText === targetText); // 完全一致です

const count = filtered.length;
if (!count) {
  throw new Error(`Element contains text "${targetText}" not found`);
}
if (count > 1) {
  console.log(`${count} elements found. Taking the first element in the list as a target.`);
}

const targetRowElement = filtered[0].parentElement;
const targetColumnElement = targetRowElement.querySelector(`td:nth-child(${columnNum})`)

// 対象の要素に対して操作を行います。例えば…
return targetColumnElement.innerText;
```