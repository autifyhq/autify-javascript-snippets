---
title: "クリップボードの値を読み出す"
weight: 10
ie_support: true
---

このスニペットを使うと、前のステップで`document.execCommand("copy")`を使ってクリップボードにコピーされた値を読みだすことができます。

注: このスニペットはコピーされたデータがテキストであると仮定しています。
### 利用方法

2つのペアになったJavaScript ステップをシナリオに追加する必要があります。

1. データを`localStorage`に保存するリスナーを、`copy`イベントのイベントリスナーに追加するステップ
2. `localStorage`からデータを読み出すステップ

ステップ1は**クリックするステップの前に**挿入する必要があります。そうすることで、クリックするステップの後でデータを読み出すことができるようになります。

```js
// Step 1
document.addEventListener('copy', function(event) {
  var active = document.activeElement;
  if (active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement) {
    var data = active.value.substring(active.selectionStart, active.selectionEnd);
    localStorage.setItem('clipboard', data);
  }
});

// Step 2
return localStorage.getItem('clipboard');
```

### 注意点

#### Autify ではiOS Safari の`document.execCommand("copy")` は機能しません

技術的制約により、Autify では`document.execCommand("copy")` がiOS Safari の環境上でのみうまく発動しません。そのため、このスニペット(および他の回避策)はiOS Safari 上では機能しません。(2022年3月現在)

#### `navigation.clipboard.writeText()` API では使えません

もしサイトが`navigation.clipboard.writeText()` API を使ってクリップボードにコピーしている場合、このアプローチはうまく動きません。このAPIは`clipboardchange`というイベントを発行することになっているのですが、2022年3月現在Chromiumではこのイベントがまだ実装されていません。
