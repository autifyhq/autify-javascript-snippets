/* This js snippet is used to add a phone number, social secruity number, or others*/

var selector = "<TODO: REPLACE SELECTOR>"; /* replace with your selector here */
var element = document.querySelector(selector);

/* Stop process if element does not exist */
if (!element) {
    throw new Error('Error: cannot find the element with selector(' + selector + ').');
}

/* creating a function to change the phone number value */

changeValue(element, "<REPLACE WITH NUMBER HERE>");

function changeValue(input,value){ 
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value" ).set;
    nativeInputValueSetter.call(input, value); 
    var inputEvent = new Event("input", { bubbles: true }); 
    input.dispatchEvent(inputEvent); 
}
