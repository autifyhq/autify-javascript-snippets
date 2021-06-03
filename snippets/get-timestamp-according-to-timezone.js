/**
 * Date
 * 日付
 * 
 * Since the Autify test run cannot be certain of which time zone the server is in, you need to calculate the offset.
 * Autifyのテスト実行ではどのタイムゾーンのサーバーか確約ができないため、オフセットを計算する必要があります。
 * 
 * If you want to get Japan Time.
 * 日本時間(JST)を取得したい場合
 * var to_timezone = 9;
 *
 * If you want to get Pacific Standard Time.
 * var to_timezone = -8;
 */
var to_timezone = 0; /* TODO: REPLACE THE NUMBER */

var from_timezone_offset = new Date().getTimezoneOffset() * 60 * 1000;
var to_timezone_offset = to_timezone * 60 * 60 * 1000;
var date = new Date(Date.now() + from_timezone_offset + to_timezone_offset);
return date;
