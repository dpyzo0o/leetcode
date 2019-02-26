/**
 *
 * Source: https://leetcode.com/problems/plus-one/
 * Date  : 2018-05-24
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer. The digits are stored such that the most significant digit
 * is at the head of the list, and each element in the array contain a single digit.
 *
 * You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 *
 * Input = [1,2,3],
 * Output: [1,2,4]
 *
 * Example 2:
 *
 * Input: [4,3,2,9]
 * Output: [4,3,3,0]
 *
 * Idea:
 *
 * What we need to care about is the digit 9. So loop through the array from end to
 * start, set the first met digit 9 and all contiguous digits 9 to 0. Then add 1 to
 * next digit (which is not 9). If already reaches the start of array, append 1 to
 * start of array.
 *
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0
    } else {
      break
    }
  }

  if (i >= 0) {
    digits[i] += 1
  } else {
    digits.unshift(1)
  }

  return digits
}
