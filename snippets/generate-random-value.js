/* Usage of this snippet:
 *   Use this snippet to create a random number.
 * 
 *   Change the following values to fit your test case:
 *     digit: Number of digits of random number
 *
 * このスニペットの用途:
 *   乱数を生成したいときにご利用ください。
 * 
 *   以下の値をテストケースに合うように変更してください:
 *     digit: 生成したい乱数の桁数
 */
var digit = 10; /* TODO: REPLACE NUMBER */
return Math.floor(Math.random() * (9 * Math.pow(10, digit - 1))) + Math.pow(10, digit - 1);
