/**
 *
 * Source: https://leetcode.com/problems/add-two-numbers/
 * Date  : 2018-05-21
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 * Idea:
 *
 * Keep track of a carry when moving the pointer to next node. Use a dummy head
 * to hold the entire list and move the cur pointer each time to next node.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var dummyHead = new ListNode(0)
  var cur = dummyHead
  var carry = 0

  while (l1 || l2 || carry) {
    var v1 = 0
    var v2 = 0
    if (l1) {
      v1 = l1.val
      l1 = l1.next
    }
    if (l2) {
      v2 = l2.val
      l2 = l2.next
    }
    var sum = v1 + v2 + carry
    carry = Math.floor(sum / 10)
    cur.next = new ListNode(sum % 10)
    cur = cur.next
  }

  return dummyHead.next
}
