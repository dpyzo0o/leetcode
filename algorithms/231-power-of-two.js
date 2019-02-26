/**
 *
 * Source: https://leetcode.com/problems/power-of-two/
 * Date  : 2018-08-09
 *
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Idea:
 *
 * If n is a power of 2, then n & n - 1 must be 0.
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n > 0 && !(n & (n - 1))
}
