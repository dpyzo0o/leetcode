/**
 *
 * Source: https://leetcode.com/problems/reverse-integer/
 * Date  : 2018-05-14
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Note: Assume we are dealing with an environment which could only store
 * integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the
 * purpose of this problem, assume that your function returns 0 when the
 * reversed integer overflows.
 *
 * Example:
 *
 * Input: 123,  output: 321
 * Input: -123, output: -321
 * Input: 120,  output: 21
 *
 * Idea:
 *
 * Using the combination of % and / can easily reverse a integer.
 *
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isNeg = x < 0;
  var result = 0;
  x = Math.abs(x);

  while (x) {
    var lastDigit = x % 10;
    result *= 10;
    result += lastDigit;
    x = Math.floor(x / 10);
  }

  result = isNeg ? -result : result;

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};
