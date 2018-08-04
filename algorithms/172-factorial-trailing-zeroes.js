/**
 *
 * Source: https://leetcode.com/problems/factorial-trailing-zeroes/
 * Date  : 2018-08-04
 *
 * Given an integer n, return the number of trailing zeroes in n!.
 *
 * Example 1:
 *
 * Input: 3 
 * Output: 0
 * Explanation: 3! = 6, no trailing zero.
 *
 * Example 2:
 *
 * Input: 5
 * Output: 1
 * Explanation: 5! = 120, one trailing zero.
 *
 * Idea:
 *
 * The trailing zero comes from 2 x 5. We have more than enough even numbers to
 * pair with 5. Thus we just need to count the number of factor 5.
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  return n === 0 ? 0 : ~~(n / 5) + trailingZeroes(~~(n / 5));
};
