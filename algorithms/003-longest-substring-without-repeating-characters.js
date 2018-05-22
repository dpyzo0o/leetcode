/**
 *
 * Source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Date  : 2018-05-22
 *
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Example:
 *
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must
 * be a substring, "pwke" is a subsequence and not a substring.
 *
 * Idea:
 *
 * Use Map structure to store the mapping of character to its index. Keep two pointers
 * i and j, which form a sliding window. Increase the fast-runner j each time, if s[j]
 * exists in the window, let's say s[j']. Then move the slow-runner i to j' + 1.
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var max = 0;
  var map = new Map();
  for (var i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1);
    }
    map.set(s[j], j);
    max = Math.max(max, j - i + 1);
  }
  return max;
};
