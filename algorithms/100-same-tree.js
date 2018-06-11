/**
 *
 * Source: https://leetcode.com/problems/same-tree/
 * Date  : 2018-06-11
 *
 * Given two binary trees, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 *
 * Example 1:
 * Input:  1         1
 *        / \       / \
 *       2   3     2   3
 *
 *      [1,2,3],   [1,2,3]
 *
 * Output: true
 *
 * Example 2:
 * Input:   1       1
 *         /         \
 *        2           2
 *
 *      [1,2],   [1,null,2]
 *
 * Output: false
 *
 * Example 3:
 * Input: 1         1
 *       / \       / \
 *      2   1     1   2
 *
 *     [1,2,1],   [1,1,2]
 *
 * Ouput: false
 *
 * Idea:
 *
 * Two trees are identical if:
 * 1. Nodes have same value
 * 2. Have same left child
 * 3. Have same right child
 *
 * Thus we can use recursion to solve the problem.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
