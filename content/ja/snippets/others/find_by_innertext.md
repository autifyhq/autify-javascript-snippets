---
title: "テキストの内容で要素を探す"
weight: 10
ie_support: false
---

要素のテキストを指定して探索を行います。

```js
const targetText = ""; //TODO: 探したいテキストを指定してください
const tagName = ""; //TODO: そのテキストを含んでいる要素の、タグ名を指定してください

const candidates = document.getElementsByTagName(tagName);
const filtered = Array.from(candidates).filter((el) => el.innerText === targetText); // 完全一致です

const count = filtered.length;
if (!count) {
  throw new Error(`Element contains text "${targetText}" not found`);
}
if (count > 1) {
  console.log(`${count} elements found. Taking the first element in the list as a target.`);
}

const targetElement = filtered[0];

// 対象の要素に対して操作を行います。例えば…
targetElement.click();
```