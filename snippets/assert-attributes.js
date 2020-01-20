// Locate the element
var selector = "<TODO: REPLACE SELECTOR>"
var element  = document.querySelector(selector)

// Stop process if it does not exist
if (!element) {
  throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

// Set attribute name
var attrName = "<TODO: REPLACE ATTRIBUTE NAME. e.g) id, class, data->"

// Get value from the elment
var actual   = element.getAttribute(attrName)

// Set expected value
var expected = "<TODO: REPLACE EXPECTED VALUE>"

// Stop process if actual and expected are different
if (actual !== expected) {
   thow new Error('Error: expected(' + expected + ') and actual(' + actual + ') are not same.')
}
