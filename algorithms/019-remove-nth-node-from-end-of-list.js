/**
 *
 * Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * Date  : 2018-08-10
 *
 * Given a linked list, remove the n-th node from the end of list and return its head.
 *
 * Example:
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note: Given n will always be valid.
 *
 * Idea:
 *
 * Keep two pointers with a gap a n nodes. When the fast pointer reaches the end, the
 * slow pointer reaches the node to be deleted.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let first = head;
  let second = dummy;
  let count = 0;

  while (first !== null) {
    first = first.next;
    if (count === n) {
      second = second.next;
    } else {
      count++;
    }
  }

  second.next = second.next.next;

  return dummy.next;
};
