# autify-javascript-snippets &middot; ![check-contents](https://github.com/autifyhq/autify-javascript-snippets/workflows/check-contents/badge.svg?branch=master)

Now we have a website for our JavaScript snippets 🎉

💻 [Autify JavaScript Snippets](https://autify-javascript-snippets.netlify.app/)

You can find detailed information about how to use each snippet on this site!

----

## Development

Prerequisites:

- Hugo: to run your local environment. See [Install Hugo](https://gohugo.io/getting-started/installing/) to get started.
- Node.js: - to run tests. Visit [nodejs.org](https://nodejs.org/en/) to download the stable binary.

To start dev server, run

```sh
hugo serve
```

in the root directory of this repository and open the URL (http:/localhost:xxxx/) displayed in the console.

To execute the tests, run

```sh
npm install
npm run test
```

**Make sure you run the tests before pushing the changes.**

The test suite represents pre-publishing checklist, such as:

- The format of your article is consistent with the template.
- The article is localized (en -> jp).

etc.

## Template

~~~
---
title: "Template"
weight: 0
ie_support: true
---

(Description)

```js
// Your JS snippet
```
~~~

Each article has attribute field like following (this part is not a markdown actually):

- title: To be displayed as the title of the page (works as a `<title>` and `<h1>` element in the page)
- wight: The sorting prioprity in the article list. The one with the smaller weight has the higher priority.
- ie_support: Whether the script works in IE11 or not. true or false.

## How To Add Snippets/Articles

All you have to do is just add your articles in the Markdown format. And Hugo will take care of the other stuff.

Plase a markdown (.md) file under the `content/en/*` directory.

The sub directories represent the categories of the snippets. Choose one that you find your article fits the most and place it under the directory.

You may create a new sub directory. That is automatically reflected to the site structure (the list of the articles displayed on the left side of the page). Make sure you also create _index.md in the new directory.

Once you done with the English article, localize it and put it under the `content/ja/*` directory.

The sub directory's name that the localized article to be placed must be the same as the English version.

## Notes

The scripts in `snippets` directory are deprecated.
(We don't update them anymore, but they are still hosted in the repository because some help docs might have links to them)

## License

autify-javascript-snippets © [Autify Engineers](https://github.com/autifyhq). Released under the [Apache 2.0](LICENSE)<br/>
Authored and maintained by [Autify Engineers](https://github.com/autifyhq) with help from [contributors](https://github.com/autifyhq/autify-javascript-snippets/graphs/contributors).
