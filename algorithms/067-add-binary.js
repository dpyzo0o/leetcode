/**
 *
 * Source: https://leetcode.com/problems/add-binary/
 * Date  : 2018-06-07
 *
 * Given two binary strings, return their sum (also a binary string).
 * The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 * Idea:
 *
 * Add the number one by one from right to left.
 *
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let arrA = a.split('')
  let arrB = b.split('')
  let len = Math.max(arrA.length, arrB.length)
  let carry = 0
  let res = ''

  while (len-- > 0 || carry > 0) {
    let aa = arrA.pop()
    let bb = arrB.pop()

    if (aa) {
      carry += parseInt(aa)
    }

    if (bb) {
      carry += parseInt(bb)
    }

    res = (carry % 2) + res
    carry = carry > 1 ? 1 : 0
  }

  return res
}
