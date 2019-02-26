/**
 *
 * Source: https://leetcode.com/problems/missing-number/
 * Date  : 2018-08-13
 *
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
 * find the one that is missing from the array.
 *
 * Example 1:
 *
 * Input: [3,0,1]
 * Output: 2
 *
 * Example 2:
 *
 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8
 *
 * Note:
 * Your algorithm should run in linear runtime complexity. Could you implement
 * it using only constant extra space complexity?
 *
 * Idea:
 *
 * Simply use the sum formula and extract the sum of the array.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length
  return (n * (n + 1)) / 2 - nums.reduce((a, b) => a + b)
}
