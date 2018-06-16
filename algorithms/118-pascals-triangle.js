/**
 *
 * Source: https://leetcode.com/problems/pascals-triangle/
 * Date  : 2018-06-16
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 *
 * Example:
 *
 * Input: 5
 *
 * Output:
 * [
 *      [1],
 *     [1,1],
 *    [1,2,1],
 *   [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 *
 * Idea:
 *
 * Generate each row by adding the adjacent numbers of previous row.
 *
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  let res = [[1]];
  for (let i = 1; i < numRows; i++) {
    let lastRow = res[i - 1];
    let temp = [1];
    for (let j = 0; j < lastRow.length - 1; j++) {
      temp.push(lastRow[j] + lastRow[j + 1]);
    }
    temp.push(1);
    res.push(temp);
  }

  return res;
};
