/**
 *
 * Source: https://leetcode.com/problems/3sum/
 * Date  : 2018-08-10
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that
 * a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *
 * Note: The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is: [[-1, 0, 1], [-1, -1, 2]]
 *
 * Idea:
 *
 * We sort the numbers first. Then use the first occurence of each number as the
 * first number in a triple. Run two-pointer algorithm for 2sum problem on the
 * remaining numbers. We have to skip same numbers for not generating duplicated
 * answers.
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)

  let res = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return res
    if (nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1
    let target = -nums[i]

    while (left < right) {
      let sum = nums[left] + nums[right]
      if (sum === target) {
        res.push([nums[i], nums[left], nums[right]])
        while (nums[left] === nums[left + 1]) left++
        while (nums[right] === nums[right - 1]) right--
        left++
        right--
      }
      if (sum > target) right--
      if (sum < target) left++
    }
  }

  return res
}
