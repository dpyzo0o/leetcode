/**
 *
 * Source: https://leetcode.com/problems/single-number/
 * Date  : 2018-06-18
 *
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 * Example 1:
 *
 * Input: [2,2,1]
 * Output: 1
 *
 * Example 2:
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 * Idea:
 *
 * If we take XOR of zero and some bit, it will return that bit.
 * If we take XOR of two same bits, it will return 0.
 * Because every number appears twice except for one, we can XOR all numbers to find the unique one.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }

  return res;
};
