/**
 *
 * Source: https://leetcode.com/problems/univalued-binary-tree/
 * Date  : 2019-02-26
 *
 * A binary tree is univalued if every node in the tree has the same value.
 * Return true if and only if the given tree is univalued.
 *
 * Example 1:
 *
 * Input: [1,1,1,1,1,null,1]
 * Output: true
 *
 * Example 2:
 *
 * Input: [2,2,2,5,2]
 * Output: false
 *
 * Idea:
 *
 * Use recursion
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  return (
    isChildUnivalTree(root, root.left) && isChildUnivalTree(root, root.right)
  )
}

function isChildUnivalTree(root, child) {
  return child === null || (child.val === root.val && isUnivalTree(child))
}
