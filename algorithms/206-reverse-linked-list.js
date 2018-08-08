/**
 *
 * Source: https://leetcode.com/problems/reverse-linked-list/
 * Date  : 2018-08-08
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 * Idea:
 *
 * Approach 1: iteratively
 * Approach 2: recursion
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
 * approach 1
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let cur = head;
  let prev = null;

  while (cur !== null) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  return prev;
};

/**
 * approach 2
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
