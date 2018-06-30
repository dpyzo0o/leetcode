/**
 *
 * Source: https://leetcode.com/problems/pascals-triangle-ii/
 * Date  : 2018-06-30
 *
 * Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
 * Note that the row index starts from 0.
 *
 * Example:
 *
 * Input: 3
 *
 * Output: [1,3,3,1]
 *
 * Idea:
 *
 * Same as 118
 *
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  let res = [[1]];
  for (let i = 0; i < rowIndex; i++) {
    let lastRow = res[i];
    let temp = [1];
    for (let j = 0; j < lastRow.length - 1; j++) {
      temp.push(lastRow[j] + lastRow[j + 1]);
    }
    temp.push(1);
    res.push(temp);
  }

  return res[rowIndex];
};
