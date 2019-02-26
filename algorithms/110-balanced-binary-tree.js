/**
 *
 * Source: https://leetcode.com/problems/balanced-binary-tree/
 * Date  : 2018-06-29
 *
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * A binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Example 1:
 *
 * Given the following tree: [3, 9, 20, null, null, 15, 7]:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * return true
 *
 * Example 2:
 *
 * Given the following tree: [1, 2, 2, 3, 3, null, null, 4, 4]:
 *       1
 *      / \
 *     2   2
 *    / \
 *   3   3
 *  / \
 * 4   4
 *
 * return false
 *
 * Idea:
 *
 * A binary tree is balanced if the height difference between two subtress is not
 * bigger than 1 and both subtrees are balanced trees.
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) return true

  const left = depth(root.left)
  const right = depth(root.right)

  return (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

function depth(root) {
  if (root === null) return 0
  return Math.max(depth(root.left), depth(root.right)) + 1
}
