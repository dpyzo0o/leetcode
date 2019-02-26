/**
 *
 * Source: https://leetcode.com/problems/merge-two-sorted-lists/
 * Date  : 2018-05-18
 *
 * Merge two sorted linked lists and return it as a new list. The new list
 * should be made by splicing together the nodes of the first two lists.
 *
 * Example:
 *
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 *
 * Idea:
 *
 * Always make l1 starts smaller, and recursively call the function until
 * l2 becomes null. Then return l1. If l1 is null at beginning, return l2.
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
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if (l1 && l2) {
    if (l1.val > l2.val) {
      var temp = l2
      l2 = l1
      l1 = temp
    }
    l1.next = mergeTwoLists(l1.next, l2)
  }
  return l1
}
