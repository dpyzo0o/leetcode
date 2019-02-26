/**
 *
 * Source: https://leetcode.com/problems/remove-element/
 * Date  : 2018-05-18
 *
 * Given an array nums and a value val, remove all instances of that value
 * in-place and return the new length. Do not allocate extra space for another
 * array, you must do this by modifying the input array in-place with O(1)
 * extra memory. The order of elements can be changed. It doesn't matter what
 * you leave beyond the new length.
 *
 * Example 1:
 *
 * Given nums = [3,2,2,3], val = 3,
 * Your function should return length = 2, with the first two elements of nums
 * being 2. It doesn't matter what you leave beyond the returned length.
 *
 * Example 2:
 *
 * Given nums = [0,1,2,2,3,0,4,2], val = 2,
 * Your function should return length = 5, with the first five elements of nums
 * containing 0, 1, 3, 0, and 4. Note that the order of those five elements can
 * be arbitrary. It doesn't matter what values are set beyond the returned length.
 *
 * Idea:
 *
 * This problem is similar to 026. We can also use two pointers, like what we did
 * in 026. But it will produce unnecessary copy operations in certain cases. e.g.
 * the removed number is at the end of array.
 *
 * However, the description says the order can be changed. So we can optimize it.
 * What we want is to remove the same number as val. So we think of replacing it
 * with another number in the array and then check it again. Meanwhile we don't
 * want to check any number a second time. Thus we can replace it with the last
 * element of array and then reduce the length by 1.
 *
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0
  var len = nums.length
  while (i < len) {
    if (nums[i] === val) {
      nums[i] = nums[len - 1]
      len--
    } else {
      i++
    }
  }
  return len
}
