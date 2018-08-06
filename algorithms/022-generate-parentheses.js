/**
 *
 * Source: https://leetcode.com/problems/generate-parentheses/
 * Date  : 2018-08-06
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * [
 *  "((()))",
 *  "(()())",
 *  "(())()",
 *  "()(())",
 *  "()()()"
 * ]
 *
 * Idea:
 *
 * Backtracking: We can start an opening bracket if we still have one (of n) left to place.
 * And we can start a closing bracket if it doesn't exceed the number of opening brackets.
 *
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = [];
  let str = '';
  backtrack(res, str, 0, 0, n);
  return res;
};

const backtrack = function(res, str, left, right, n) {
  if (str.length === 2 * n) {
    res.push(str);
    return;
  }

  if (left < n) {
    backtrack(res, str + '(', left + 1, right, n);
  }

  if (left > right) {
    backtrack(res, str + ')', left, right + 1, n);
  }
};
