/**
 *
 * Source: https://leetcode.com/problems/longest-common-prefix/
 * Date  : 2018-05-16
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: ["flower", "flow", "flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: ["dog", "racecar", "car"]
 * Output: ""
 *
 * Idea:
 *
 * The default behavior of Array.prototype.sort() will sort the strs in a way that the
 * common prefix (if exists) must be between the first and last element of strs. This is
 * because sort() compares strings character by character until it finds two different
 * characters. If all characters are same, two strings will remain their order.
 *
 * Then it's very easy to extract the common prefix from two strings.
 *
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }

  var sorted = strs.slice().sort();
  var str1 = sorted[0];
  var str2 = sorted[sorted.length - 1];
  var len = Math.min(str1.length, str2.length);
  var i = 0;

  while (i < len && str1[i] === str2[i]) {
    i++;
  }

  return str1.slice(0, i);
};
