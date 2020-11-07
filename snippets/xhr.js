var url = "API URL"
var xhr = new XMLHttpRequest()

xhr.onerror = function() {
  throw new Error("Network Error")
};

xhr.onload = function() {
  console.log(JSON.parse(xhr.response))
};

xhr.open("POST", url, false);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("key=value");
