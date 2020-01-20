const query = "<TODO: Some locator>"
const element = document.querySelector(query)
if (!element) {
  throw new Error('Cannot find the element')
}

const attrName = "<TODO: Attribute Name>"
const actual   = element.getAttribute(attrName)
const expected = "<TODO: Expected value>"
if (actual !== expected) {
   thow new Error('Actual:' + actual + ", Expected:" + expected)
}
