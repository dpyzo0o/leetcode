/**
 *
 * Source: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * Date  : 2018-06-29
 *
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the longest path from the root node down to the nearest leaf node.
 * Note: A leaf is a node with no children.
 *
 * Example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its depth = 2.
 *
 * Idea:
 *
 * Use resursion.
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
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) return 0

  const left = minDepth(root.left)
  const right = minDepth(root.right)

  return left === 0 || right === 0
    ? left + right + 1
    : Math.min(left, right) + 1
}
