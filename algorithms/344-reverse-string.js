/**
 *
 * Source: https://leetcode.com/problems/reverse-string/
 * Date  : 2018-08-20
 *
 * Write a function that takes a string as input and returns the string reversed.
 *
 * Example 1:
 *
 * Input: 'hello'
 * Output: 'olleh'
 *
 * Example 2:
 *
 * Input: 'A man, a plan, a canal: Panama'
 * Output: 'amanaP :lanac a ,nalp a ,nam A'
 *
 * Idea:
 *
 * Code explains.
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let res = ''

  for (let i = 0; i < s.length; i++) {
    res = s[i] + res
  }

  return res
}
