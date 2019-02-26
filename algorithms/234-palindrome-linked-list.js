/**
 *
 * Source: https://leetcode.com/problems/palindrome-linked-list/
 * Date  : 2018-08-22
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 * Example 1:
 *
 * Input: 1->2
 * Output: false
 *
 * Example 2:
 *
 * Input: 1->2->2->1
 * Output: true
 *
 * Idea:
 *
 * Reverse one half of the list and compare it to another half.
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
var isPalindrome = function(head) {
  let fast = head
  let slow = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  if (fast !== null) slow = slow.next

  slow = reverse(slow)
  fast = head

  while (slow !== null) {
    if (slow.val !== fast.val) return false
    slow = slow.next
    fast = fast.next
  }

  return true
}

const reverse = head => {
  let cur = head
  let prev = null

  while (cur !== null) {
    let temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }

  return prev
}
