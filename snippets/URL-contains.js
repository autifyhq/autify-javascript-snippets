/* This JS snippet is for whether the URL contains specific text */


/* if url contains the indicated text -> continue, otherwise throw an error */

if(window.location.href.indexOf('<INSERT TEXT HERE>') < 0) {
    throw new Error("Error: URL does not contain <INSERT YOUR TEXT>")
}

/* if instead you want the url to NOT contain the specified text use this */

if(window.location.href.indexOf('<INSERT TEXT HERE>') > 0) {
    throw new Error("Error: URL contains <INSERT YOUR TEXT>")
}