/**
 *
 * Source: https://leetcode.com/problems/climbing-stairs/
 * Date  : 2018-06-01
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 *
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Idea:
 *
 * If we denote the number of ways to reach step i as num[i], the we can easily conclude
 * that num[i] = num[i - 1] + num[i - 2]. Actually it's just a Fibonacci sequence starting
 * with 1 and 2 as the first two numbers.
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) return 1

  let a = 1
  let b = 2

  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }

  return b
}
