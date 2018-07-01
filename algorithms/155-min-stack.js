/**
 *
 * Source: https://leetcode.com/problems/min-stack/
 * Date  : 2018-07-01
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * - push(x) -- Push element x onto stack.
 * - pop() -- Removes the element on top of the stack.
 * - top() -- Get the top element.
 * - getMin() -- Retrieve the minimum element in the stack.
 *
 * Example:
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 * Idea:
 *
 * Keep two stacks, the second for storing the minimum element.
 *
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.s1.push(x);
  if (!this.s2.length || x <= this.getMin()) this.s2.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.s1[this.s1.length - 1] === this.getMin()) this.s2.pop();
  this.s1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.s1[this.s1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.s2[this.s2.length - 1];
};
