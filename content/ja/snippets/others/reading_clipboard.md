---
title: "クリップボードの値を読み出す"
weight: 10
ie_support: true
---

このスニペットを使うと、前のステップで`document.execCommand("copy")`を使ってクリップボードにコピーされた値を読みだすことができます。

### 利用方法

2つのペアになったJavaScript ステップをシナリオに追加する必要があります。

1. データを`localStorage`に保存するリスナーを、`copy`イベントのイベントリスナーに追加するステップ
2. `localStorage`からデータを読み出すステップ

ステップ1は**クリックするステップの前に**挿入する必要があります。そうすることで、クリックするステップの後でデータを読み出すことができるようになります。

```js
// Step 1
document.addEventListener('copy', function(event) {
  var data = document.getSelection().toString();
  localStorage.setItem('clipboard', data);
});

// Step 2
return localStorage.getItem('clipboard');
```

### 注意点

もしサイトが`navigation.clipboard.write*` API を使ってクリップボードにコピーしている場合、このアプローチはうまく動きません。このAPIは`clipboardchange`というイベントを発行することになっているのですが、2022年3月現在Chromiumではこのイベントがまだ実装されていません。
