---
title: "日付を取得する"
weight: 70
ie_support: true
---

テスト実行時の環境に合わせたタイムスタンプを作成するために使います。

Autify のテスト実行ではどのタイムゾーンのサーバーか確約ができないため、オフセットを計算する必要があります。

- 日本時間(JST)を取得したい場合: `var to_timezone = 9;`
- 太平洋標準時(PST)を取得したい場合: `var to_timezone = -8;`

```js
var to_timezone = 0; /* TODO: REPLACE THE NUMBER */

var from_timezone_offset = new Date().getTimezoneOffset() * 60 * 1000;
var to_timezone_offset = to_timezone * 60 * 60 * 1000;
var date = new Date(Date.now() + from_timezone_offset + to_timezone_offset);
return date;
```
