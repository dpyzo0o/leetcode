/**
 *
 * Source: https://leetcode.com/problems/sqrtx/
 * Date  : 2018-06-10
 *
 * Implement int sqrt(int x).
 * Compute and return the square root of x, where x is guaranteed to be a
 * non-negative integer. Since the return type is an integer, the decimal
 * digits are truncated and only the integer part of the result is returned.
 *
 * Example 1:
 * Input: 4
 * Output: 2
 * 
 * Example 2:
 * Input: 8
 * Output: 2
 *
 * Idea:
 *
 * Use Newton's method
 *
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let t = x;
  while (t * t > x) {
    t = Math.floor((t + x / t) / 2);
  }
  return t;
};
