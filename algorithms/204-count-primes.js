/**
 *
 * Source: https://leetcode.com/problems/count-primes/
 * Date  : 2018-08-14
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Example:
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 * Idea:
 *
 * Code explains.
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  let isPrime = new Array(n).fill(true)
  for (let i = 2; i < n; i++) {
    if (isPrime[i] === true) {
      count++
      for (let j = 2; i * j < n; j++) {
        isPrime[i * j] = false
      }
    }
  }
  return count
}
