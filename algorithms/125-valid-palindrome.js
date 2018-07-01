/**
 *
 * Source: https://leetcode.com/problems/valid-palindrome/
 * Date  : 2018-07-01
 *
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 *
 * Example 1:
 *
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 *
 * Input: "race a car"
 * Output: false
 *
 * Idea:
 *
 * Use regular expression to convert the string to contain only alphanumeric characters.
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }

  return true;
};
