/**
 *
 * Source: https://leetcode.com/problems/excel-sheet-column-number/
 * Date  : 2018-08-02
 *
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * For example:
 *  1 -> A
 *  2 -> B
 *  3 -> C
 *  ...
 *  26 -> Z
 *  27 -> AA
 *  28 -> AB
 *  ...
 *
 * Example 1:
 *
 * Input: 'A'
 * Output: 1
 *
 * Example 2:
 *
 * Input: 'AB'
 * Output: 28
 *
 * Example 3:
 *
 * Input: 'ZY'
 * Output: 701
 *
 * Idea:
 *
 * Code explains
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0
  let len = s.length

  for (let i = 0; i < len; i++) {
    res += (s[i].charCodeAt(0) - 64) * Math.pow(26, len - i - 1)
  }

  return res
}
