/**
 *
 * Source: https://leetcode.com/problems/binary-tree-paths/
 * Date  : 2018-08-12
 *
 * Given a binary tree, return all root-to-leaf paths.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Input:
 *     1
 *   /   \
 *  2     3
 *   \
 *    5
 *
 * Output: ['1->2->5', '1->3']
 *
 * Idea:
 *
 * DFS
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = []
  if (root !== null) dfs(root, '', res)
  return res
}

const dfs = (node, path, arr) => {
  if (node.left === null && node.right === null) arr.push(path + node.val)
  if (node.left !== null) dfs(node.left, path + node.val + '->', arr)
  if (node.right !== null) dfs(node.right, path + node.val + '->', arr)
}
