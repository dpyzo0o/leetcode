/**
 *
 * Source: https://leetcode.com/problems/longest-palindromic-substring/
 * Date  : 2018-07-03
 *
 * Given a string s, find the longest palindromic substring in s. You may assume
 * that the maximum length of s is 1000.
 *
 * Example:
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Idea:
 *
 * Palindrome is symmetric around its center.
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i)
    let len2 = expandAroundCenter(s, i, i + 1)
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2)
      end = i + Math.floor(len / 2)
    }
  }
  return s.slice(start, end + 1)
}

function expandAroundCenter(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return r - l - 1
}
