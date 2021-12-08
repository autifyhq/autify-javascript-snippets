/*
 * Use this snippet to drag and drop an element using mouse events.
 * Whether it will work or not depends on how the dran-and-drop is implemented in the web site.
 *
 * マウスイベントを利用して要素をドラッグ&ドロップするためにこのスニペットを使用します。
 * このスニペットが機能するかどうかはサイト内で実装されているドラッグ&ドロップの実装によります。
 *
 */

var dragTargetSelector = "<TODO: REPLACE SELECTOR>";
var dropAreaSelector = "<TODO: REPLACE SELECTOR>";

/**
 * --------- You don't need to touch below ---------------
 * --------- ここから下は変える必要はありません ----------
 */

var dragTarget = document.querySelector(dragTargetSelector);
if (!dragTarget) {
  throw new Error("Element not found by selector:", dragTargetSelector);
}

var dropArea = document.querySelector(dropAreaSelector);
if (!dropArea) {
  throw new Error("Element not found by selector:", dropAreaSelector);
}

var coords = getCoordinates(dropArea);

dragTarget.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
dragTarget.dispatchEvent(
  new MouseEvent("mousemove", {
    bubbles: true,
    clientX: coords.x,
    clientY: coords.y,
  })
);
dragTarget.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));

function getCoordinates(element) {
  var rect = element.getBoundingClientRect();
  var x = rect.x + rect.width / 2;
  var y = rect.y + rect.height / 2;
  return {
    x: x,
    y: y,
  };
}
