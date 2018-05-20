/**
 *
 * Source: https://leetcode.com/problems/count-and-say/
 * Date  : 2018-05-20
 *
 * Find the n’th term in Look-and-say (Or Count and Say) Sequence.
 * The look-and-say sequence is the sequence of below integers:
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 6.     312211
 * 7.     13112221
 * 8.     1113213211
 * 9.     31131211131221
 * 10.    13211311123113112211
 *
 * The (i+1)th sequence is the "count and say" of the ith sequence.
 *
 * Idea:
 *
 * Loop on the previous sequence and keep track of count of all consecutive
 * numbers. Then just append the count followed by the number.
 *
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";

  var res = "1";
  for (var i = 2; i <= n; i++) {
    var count = 1;
    var temp = "";
    for (var j = 1; j < res.length; j++) {
      if (res[j] === res[j - 1]) {
        count++;
      } else {
        temp += count + res[j - 1];
        count = 1;
      }
    }
    temp += count + res[j - 1];
    res = temp;
  }

  return res;
};
