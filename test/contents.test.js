import fs from "fs";
import path from "path";
import { strict as assert } from "assert";
import * as acorn from "acorn";
import yaml from "js-yaml";

const omit = (obj, key) => ({
  ...obj,
  [key]: undefined,
});

const __dirname = new URL(".", import.meta.url).pathname;
const contentDir = (lang) =>
  path.resolve(__dirname, "../content", lang, "snippets");

const jsCodeBlockPattern = /```js(.+)```/s;
const frontMatterPattern = /---\n(.+)\n---/s;

describe("content/", () => {
  const langs = ["en/", "ja/"];

  for (const lang of langs) {
    const snippetFiles = fs
      .readdirSync(contentDir(lang))
      .filter((name) => name.endsWith(".md") && !name.startsWith("_"));

    describe(lang, () => {
      for (const snippetFile of snippetFiles) {
        const otherLang = langs.find((l) => l !== lang);

        describe(snippetFile, () => {
          let content = null;
          let frontMatter = null;
          let jsCode = null;

          before(() => {
            const filepath = path.join(contentDir(lang), snippetFile);
            try {
              content = fs.readFileSync(filepath, "utf8");
              frontMatter = yaml.load(frontMatterPattern.exec(content)[1]);
              jsCode = jsCodeBlockPattern.exec(content)[1];
            } catch (err) {
              console.warn(`[warn] failed to read file ${filepath}`);
            }
          });

          it("has the corresponding localized content", () => {
            assert.ok(
              fs.existsSync(path.join(contentDir(otherLang), snippetFile))
            );
          });

          it("has front matter same as one in the corresponding localized content except title", () => {
            const otherContent = fs.readFileSync(
              path.join(contentDir(otherLang), snippetFile),
              "utf8"
            );
            const otherFrontMatter = yaml.load(
              frontMatterPattern.exec(otherContent)[1]
            );
            assert.ok(frontMatter, "front matter does not exist");
            assert.deepEqual(
              omit(frontMatter, "title"),
              omit(otherFrontMatter, "title")
            );
          });

          it("has ie_support flag in front matter", () => {
            assert.ok(frontMatter, "front matter does not exist");
            assert.equal(
              typeof frontMatter.ie_support,
              "boolean",
              "front matter does not have ie_support flag"
            );
          });

          it("has JS code block", () => {
            assert.ok(content);
            assert.ok(jsCodeBlockPattern.test(content));
          });

          it("JS code is valid", () => {
            assert.ok(content);
            assert.ok(jsCode);
            const ecmaVersion = frontMatter.ie_support ? 5 : 2020;
            assert.doesNotThrow(
              () => {
                try {
                  acorn.parse(jsCode, { ecmaVersion })
                } catch (e) {
                  // It's ok because it's inside of a JS step function
                  if (e.message.startsWith("'return' outside of function")) {
                    return
                  }
                  throw e
                }
              },
              `Failed to parse JavaScript code with ECMA version ${ecmaVersion}`
            );
          });

          it("JS code is same as the corresponding one except comments", () => {
            assert.ok(content);
            assert.ok(jsCode);
            const otherContent = fs.readFileSync(
              path.join(contentDir(otherLang), snippetFile),
              "utf8"
            );
            const otherJsCode = jsCodeBlockPattern.exec(otherContent)[1];
            const removeComments = (jsCode) => {
              return jsCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "").trim();
            };
            assert.equal(removeComments(jsCode), removeComments(otherJsCode));
          });
        });
      }
    });
  }
});
