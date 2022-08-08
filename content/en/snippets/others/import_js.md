---
title: "Import a JavaScript library"
weight: 30
ie_support: false
---

Import a JavaScript library. The following example imports jQuery from CDN.
It loads JavaScript by creating a `<script>` element and adding it to the `<head>` element.

(Caveat) When you use a third-party library, please do it at your own risk. If you should use a malicious library, your web site whould be exposed to risks to execute arbitary codes.

```js
const script = document.createElement('script');
/* Specify the URL of a JavaScript library */
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";

/* You don't need to touch below */
return new Promise((resolve, reject) => {
  script.onerror = () => {
    reject(new Error("Failed to load script"))
  }
  script.onload = () => {
    resolve()
  }

  document.head.appendChild(script);
})
```

You can use the functions of jQuery in subsequent JS steps.

```js
// Example usage of jQuery
return $("h1").text();
```
