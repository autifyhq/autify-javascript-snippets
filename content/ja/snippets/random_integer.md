---
title: "乱数生成"
weight: 50
ie_support: true
---

乱数を生成したいときにご利用ください。

以下の値をテストケースに合うように変更してください:

- `digit`: 生成したい乱数の桁数

```js
var digit = 10; /* TODO: REPLACE NUMBER */
return Math.floor(Math.random() * (9 * Math.pow(10, digit - 1))) + Math.pow(10, digit - 1);
```
