/**
 * 
 * Source: https://leetcode.com/problems/palindrome-number/
 * Date  : 2018-05-14
 * 
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * 
 * Example:
 * 
 * Input: 121,  output: true
 * Input: -121, output: false
 * Input: 10,   output: false
 * 
 * Idea:
 * 
 * It's enough to just reverse half of the number. If the reverse of one half
 * is same as the other half, the integer is a palindrome.
 * 
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  var reverse = 0;
  while (x > reverse) {
    reverse = reverse * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return x === reverse || x === Math.floor(reverse / 10);
};