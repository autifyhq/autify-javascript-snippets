// Locate the element
var selector = "<TODO: REPLACE SELECTOR>"
var element  = document.querySelector(selector)

// Stop process if it does not exist
if (!element) {
  throw new Error('Error: cannot find the element with ' + selector + '.');
}

// Set attribute name
const attrName = "<TODO: REPLACE ATTRIBUTE NAME. e.g) id, class, data->"

// Get value from the elment
const actual   = element.getAttribute(attrName)

// Set expected value
const expected = "<TODO: REPLACE EXPECTED VALUE>"

// Stop process if actual and expected are different
if (actual !== expected) {
   thow new Error('Error: expected(' + expected + ') and actual(' + actual + ') are not same.')
}
