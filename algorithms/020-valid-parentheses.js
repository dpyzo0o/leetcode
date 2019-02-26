/**
 *
 * Source: https://leetcode.com/problems/valid-parentheses/
 * Date  : 2018-05-18
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 * Input: "()"
 * Output: true
 *
 * Example 2:
 *
 * Input: "()[]{}"
 * Output: true
 *
 * Example 3:
 *
 * Input: "(]"
 * Output: false
 *
 * Example 4:
 *
 * Input: "([)]"
 * Output: false
 *
 * Example 5:
 *
 * Input: "{[]}"
 * Output: true
 *
 * Idea:
 *
 * What we need is just a stack, using the last-in-first-out (LIFO) feature.
 *
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  var stack = []

  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else {
      var c = stack.pop()
      if (map[c] !== s[i]) {
        return false
      }
    }
  }

  return stack.length === 0
}
