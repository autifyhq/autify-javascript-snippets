/* Date
 * 日付
 *   change the timezone if you need, in the case of JST, set 9
 *   日本時間(JST)の場合 9 */
var to_timezone = 9;

var from_timezone_offset = new Date().getTimezoneOffset() * 60 * 1000;
var to_timezone_offset = to_timezone * 60 * 60 * 1000;
var date = new Date(Date.now() + from_timezone_offset + to_timezone_offset);
return date;

/* Random number
 * 乱数 */
var size = "<TODO: REPLACE SIZE>";
return Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1);
