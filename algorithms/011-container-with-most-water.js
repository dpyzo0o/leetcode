/**
 *
 * Source: https://leetcode.com/problems/container-with-most-water/
 * Date  : 2018-08-04
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two endpoints
 * of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis
 * forms a container, such that the container contains the most water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 * Example:
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 * Idea:
 *
 * Keep two pointers, move the shorter line inwards every step (the shorter line determines
 * the maximum area), then recalculate the maximum area.
 *
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  let l = 0
  let r = height.length - 1

  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }

  return max
}
