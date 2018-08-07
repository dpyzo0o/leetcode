/**
 *
 * Source: https://leetcode.com/problems/remove-linked-list-elements/
 * Date  : 2018-08-07
 *
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example:
 *
 * Input: 1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 *
 * Idea:
 *
 * Use dummy head
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let cur = head;
  let prev = dummyHead;

  while (cur !== null) {
    if (cur.val === val) {
      prev.next = cur.next;
    } else {
      prev = prev.next;
    }
    cur = cur.next;
  }

  return dummyHead.next;
};
