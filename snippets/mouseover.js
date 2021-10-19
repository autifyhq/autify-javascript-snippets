/**
 * Note: A element does not listen to mouseover event. Please make sure the what event listen to with Developer Tools.
 * https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners
 *
 * 注意：要素によってはmouseoverイベントが登録されていないものがあります。どのイベントが登録されているかDeveloper Toolsでの確認をしてください。
 * https://developers.google.com/web/updates/2015/05/easily-jump-to-event-listeners
 */

/**
 * CSS selector to locate the element of the mouseover target
 * マウスオーバー対象の要素を特定するための CSS セレクタ
 */
var selector = "<TODO: REPLACE SELECTOR>";

/**
 * (Optional) CSS selector to locate the element like a tooltip that will appear by hovering the mouse over the target element.
 * This is used to scroll the tooltip into view after mouseover.
 * (任意) 上記の要素にマウスオーバーすると現れるツールチップ要素に対する CSS セレクタ
 * このセレクタを指定すると、マウスオーバー後にツールチップ要素が画面中央に来るようスクロールします
 */
var tooltipSelector = "";

/* --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ---------- */

var element = document.querySelector(selector);

/**
 * Stop process if it does not exist
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
   * For modern browser
   * モダンブラウザの場合
   */
  event = new Event("mouseover");
} else {
  /**
   * For IE 11
   * IE 11 の場合
   */
  event = document.createEvent("Event");
  event.initEvent("mouseover", true, true);
}

/**
 * Fire a mouse over event
 * マウスオーバーイベントを発火させる
 */
element.dispatchEvent(event);

/**
 * Scroll the tooltip into view if `tooltipSelector` is specified
 * `tooltipSelector` が指定されていたらツールチップ要素が画面中央にくるようスクロールする
 */
if (tooltipSelector) {
  var tooltip = document.querySelector(tooltipSelector);
  if (!tooltip) {
    throw new Error(
      "Error: cannot find the element with selector(" + tooltipSelector + ")."
    );
  }

  tooltip.scrollIntoView();
}
