/**
 *
 * Source: https://leetcode.com/problems/implement-queue-using-stacks/
 * Date  : 2018-08-09
 *
 * Implement the following operations of a queue using stacks.
 * - push(x) -- Push element x to the back of queue.
 * - pop() -- Removes the element from in front of queue.
 * - peek() -- Get the front element.
 * - empty() -- Return whether the queue is empty.
 *
 * Example:
 *
 * MyQueue queue = new MyQueue();
 *
 * queue.push(1);
 * queue.push(2);
 * queue.peek();  // returns 1
 * queue.pop();   // returns 1
 * queue.empty(); // returns false
 *
 * Notes:
 * - You must use only standard operations of a stack -- which means only push
 *   to top, peek/pop from top, size, and is empty operations are valid.
 * - Depending on your language, stack may not be supported natively. You may
 *   simulate a stack by using a list or deque (double-ended queue), as long
 *   as you use only standard operations of a stack.
 * - You may assume that all operations are valid (for example, no pop or peek
 *   operations will be called on an empty queue).
 *
 * Idea:
 *
 * Keep two stacks. Use the second stack as transfer station.
 *
 */

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.s1 = []
  this.s2 = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (this.s1.length === 0) {
    this.s1.push(x)
  } else {
    for (let i = 0, len = this.s1.length; i < len; i++) {
      this.s2.push(this.s1.pop())
    }
    this.s1.push(x)
    for (let i = 0, len = this.s2.length; i < len; i++) {
      this.s1.push(this.s2.pop())
    }
  }
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.s1.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.s1[this.s1.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.s1.length === 0
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
