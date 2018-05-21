/**
 *
 * Source: https://leetcode.com/problems/maximum-subarray/
 * Date  : 2018-05-21
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * Idea:
 *
 * Kadane's algorithm. A nice explanation on youtube:
 * https://www.youtube.com/watch?v=86CQq3pKSUw
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxCurrent = maxGlobal = nums[0];
  for (var i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxGlobal = Math.max(maxGlobal, maxCurrent);
  }
  return maxGlobal;
};
