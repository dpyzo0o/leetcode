/**
 *
 * Source: https://leetcode.com/problems/power-of-three/
 * Date  : 2018-08-20
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Idea:
 *
 * 1162261467 is 3^19,  3^20 is bigger than int
 *
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  return n > 0 && 1162261467 % n === 0;
};
