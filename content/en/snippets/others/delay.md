---
title: "Delay (with await)"
weight: 10
ie_support: false
---

The `delay` function that sleeps/waits for the seconds you specified.

```js
function delay(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

return (async () => {
  // You want to return promise object
  // so that the test executon engine can wait it to be resolved.
  // Please write the code inside of this scope.

  // Example:
  console.log(Date.now());
  await delay(1);
  console.log(Date.now());
})();
```
