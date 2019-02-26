/**
 *
 * Source: https://leetcode.com/problems/valid-anagram/
 * Date  : 2018-08-09
 *
 * Given two strings s and t , write a function to determine if t is an anagram of s.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Note: You may assume the string contains only lowercase alphabets.
 *
 * Idea:
 *
 * Hash table.
 *
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  let ms = {}
  let mt = {}
  for (let i = 0; i < s.length; i++) {
    ms[s[i]] = (ms[s[i]] || 0) + 1
    mt[t[i]] = (mt[t[i]] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    if (ms[s[i]] !== mt[s[i]]) return false
  }

  return true
}
