# autify-javascript-snippets &middot; ![check-contents](https://github.com/autifyhq/autify-javascript-snippets/workflows/check-contents/badge.svg?branch=master) [![Netlify Status](https://api.netlify.com/api/v1/badges/9645bcb3-2964-440f-9b31-ebd3d9cc908c/deploy-status)](https://app.netlify.com/sites/autify-javascript-snippets/deploys)

JavaScript snippets used commonly in Autify’s JS steps.

https://autify-javascript-snippets.netlify.app/

### Development

Prerequisites:

- Hugo: [Install Hugo](https://gohugo.io/getting-started/installing/)
- Node.js - this is needed for testing

To start dev server, run `hugo serve`.

```
hugo serve
```

To add/edit articles, all you need to do is editing markdown files under the `content/` directory.

Please make sure before creating a pull request that

- Both contents in `en/` and `ja/` have been edited
- Pass test

You can run test by the following commands:

```
npm install
npm run test
```

### License

autify-javascript-snippets © [Autify Engineers](https://github.com/autifyhq). Released under the [Apache 2.0](LICENSE)<br/>
Authored and maintained by [Autify Engineers](https://github.com/autifyhq) with help from [contributors](https://github.com/autifyhq/autify-javascript-snippets/graphs/contributors).
