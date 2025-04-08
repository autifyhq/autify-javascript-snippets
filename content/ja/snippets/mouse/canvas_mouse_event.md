---
title: "キャンバスのマウスイベント"
weight: 80
ie_support: true
---

このスニペットを使用して、`canvas` 要素内の特定の領域をクリックできます。

必要に応じてコード内の値を変更してください。


```js
// 使用したい CSS セレクターをここに指定します
var selector = "Selector here";

// 要素を取得
var element = document.querySelector(selector);

if (!element) {
  throw new Error("Error: cannot find the element with selector (" + selector + ").");
}

// 要素の位置とサイズを取得
var rect = element.getBoundingClientRect();

// 対象としたいクリック位置の座標を指定（ここでは要素の1/4の位置）
var clickX = rect.left + rect.width / 4;
var clickY = rect.top + rect.height / 4;

// 発火させるマウスイベントの一覧
// 不要なマウスイベントは削除してください 
var mouseEvents = ['mouseover', 'mouseenter', 'mousedown', 'mouseup', 'click', 'dblclick', 'mouseout'];

// 各イベントを順に発火させる
mouseEvents.forEach(function(eventType) {
  var event = new MouseEvent(eventType, {
    bubbles: true,
    cancelable: true,
    clientX: clickX,
    clientY: clickY
  });

  element.dispatchEvent(event);
});
```
