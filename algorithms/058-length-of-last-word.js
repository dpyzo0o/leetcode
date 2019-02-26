/**
 *
 * Source: https://leetcode.com/problems/length-of-last-word/
 * Date  : 2018-05-21
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string. If the last
 * word does not exist, return 0.
 *
 *
 * Example:
 *
 * Input: "Hello World"
 * Output: 5
 *
 * Idea:
 *
 * Easy problem, just be careful with some special cases. "" and "a " should
 * return 0 and 1.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim().split(' ')
  return s[s.length - 1].length
}
