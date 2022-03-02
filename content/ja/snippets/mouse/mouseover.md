---
title: "マウスホバー"
weight: 50
ie_support: true
---

ホバーステップでマウスオーバーをうまく記録できない場合に、マウスオーバーを再現します。

注意：要素によっては mouseover イベントが登録されていないものがあります。どのイベントが登録されているか Developer Tools での確認をしてください。

https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners

```js
/**
 * 要素を探す
 */
var selector = "<TODO: REPLACE SELECTOR>";
var element = document.querySelector(selector);

/**
 * 要素がなければ処理を中断する
 */
if (!element) {
  throw new Error(
    "Error: cannot find the element with selector(" + selector + ")."
  );
}

var event;
if (typeof Event === "function") {
  /**
   * モダンブラウザの場合
   */
  event = new Event("mouseover");
} else {
  /**
   * IE 11 の場合
   */
  event = document.createEvent("Event");
  event.initEvent("mouseover", true, true);
}

/**
 * マウスオーバーイベントを発火させる
 */
element.dispatchEvent(event);
```
