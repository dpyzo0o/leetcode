/**
 *
 * Source: https://leetcode.com/problems/two-sum/
 * Date  : 2018-05-14
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target. You may assume that each input would have
 * exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 * Idea:
 *
 * Use Map object provided in ES6 to maintain a mapping of each element to its
 * index. While inserting the element Map, also look back to check if complement
 * already exists. If yes, return the result. Here I use Array.prorotype.some()
 * function, it breaks the iteration when callback returns true.
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = new Map()
  var result = []

  nums.some(function(el, idx) {
    var complement = target - el
    if (map.has(complement)) {
      result = [map.get(complement), idx]
      return true
    }
    map.set(el, idx)
  })

  return result
}
