/**
 *
 * Source: https://leetcode.com/problems/linked-list-cycle/
 * Date  : 2018-06-25
 *
 * Given a linked list, determine if it has a cycle in it.
 *
 * Idea:
 *
 * We can simply use Set to solve the problem, but it requires extra space to store
 * the node address. To optimize, we can keep two pointers at different speed. Slow
 * pointer moves one step and fast pointer moves two step each time. If the list
 * contains a cycle, the fast poiner will eventually catch the slow pointer.
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};
