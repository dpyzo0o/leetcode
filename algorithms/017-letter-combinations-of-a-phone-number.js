/**
 *
 * Source: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Date  : 2018-08-23
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter
 * combinations that the number could represent. A mapping of digit to letters (just
 * like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 * Example:
 *
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 *
 * Idea:
 *
 * Solve the problem iteratively.
 *
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  let res = [''];
  const charmap = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  for (let i = 0; i < digits.length; i++) {
    let temp = [];
    let chars = charmap[digits[i]];
    for (let j = 0; j < chars.length; j++) {
      for (let k = 0; k < res.length; k++) {
        temp.push(res[k] + chars[j]);
      }
    }
    res = temp;
  }

  return res;
};
