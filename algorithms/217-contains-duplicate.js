/**
 *
 * Source: https://leetcode.com/problems/contains-duplicate/
 * Date  : 2018-08-08
 *
 * Given an array of integers, find if the array contains any duplicates.
 * Your function should return true if any value appears at least twice in the array,
 * and it should return false if every element is distinct.
 *
 * Example 1:
 *
 * Input: [1,2,3,1]
 * Output: true
 *
 * Example 2:
 *
 * Input: [1,2,3,4]
 * Output: false
 *
 * Idea:
 *
 * Use ES6 set structure
 *
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums.length < 2) return false

  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i])
    } else {
      return true
    }
  }

  return false
}
