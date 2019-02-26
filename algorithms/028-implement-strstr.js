/**
 *
 * Source: https://leetcode.com/problems/implement-strstr/
 * Date  : 2018-05-19
 *
 * Return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 *
 * Example 1:
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Idea:
 *
 * Keep two pinters i and j in haystack and needle respectively, increase i if
 * needle[j] !== haystack[i + j], otherwise increase j. If we reach the end of
 * needle then we find the result i. If we reach the end of haystack, then there
 * is no match, return -1.
 *
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (var i = 0; ; i++) {
    for (var j = 0; ; j++) {
      if (j === needle.length) return i
      if (i + j === haystack.length) return -1
      if (needle[j] !== haystack[i + j]) break
    }
  }
}
