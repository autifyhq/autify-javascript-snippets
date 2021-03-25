/**
 * Date
 * 日付
 * 
 * Since the Autify test run cannot be certain of which time zone the server is in, you need to calculate the offset.
 * Autifyのテスト実行ではどのタイムゾーンのサーバーか確約ができないため、オフセットを計算する必要があります。
 * 
 * If you want to get Japan time.
 * 日本時間(JST)を取得したい場合
 * var to_timezone = 9;
 */
var to_timezone = <TODO: REPLACE SIZE>;

var from_timezone_offset = new Date().getTimezoneOffset() * 60 * 1000;
var to_timezone_offset = to_timezone * 60 * 60 * 1000;
var date = new Date(Date.now() + from_timezone_offset + to_timezone_offset);
return date;

/**
 * Random number
 * 乱数
 */
var size = "<TODO: REPLACE SIZE>";
return Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) + Math.pow(10, n - 1);
