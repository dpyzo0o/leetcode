/**
 *
 * Source: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * Date  : 2018-06-04
 *
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * Example 1:
 * Input: 1->1->2
 * Output: 1->2
 *
 * Example 2:
 * Input: 1->1->2->3->3
 * Output: 1->2->3
 *
 * Idea:
 *
 * Since the list is already sorted, we just go through the list and compare the
 * contiguous node values. Skip the node if its value equals the one before.
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let res = head;

  while (head !== null && head.next !== null) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }

  return res;
};
