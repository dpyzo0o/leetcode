/**
 *
 * Source: https://leetcode.com/problems/invert-binary-tree/
 * Date  : 2018-08-09
 *
 * Invert a binary tree.
 *
 * Example:
 *
 * Input:
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 *
 * Output:
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 *
 * Idea:
 *
 * Use recursion.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) return null;

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;

  return root;
};
