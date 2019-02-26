/**
 *
 * Source: https://leetcode.com/problems/add-digits/
 * Date  : 2018-08-12
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 *
 * Example:
 *
 * Input: 38
 * Output: 2
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
 *              Since 2 has only one digit, return it.
 *
 * Idea:
 *
 * See: https://en.wikipedia.org/wiki/Digital_root#Congruence_formula
 *
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  return 1 + ((num - 1) % 9)
}
