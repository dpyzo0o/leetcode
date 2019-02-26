/**
 *
 * Source: https://leetcode.com/problems/symmetric-tree/
 * Date  : 2018-06-09
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 *
 * But the following [1,2,2,null,3,null,3] is not:
 *    1
 *   / \
 *  2   2
 *   \   \
 *    3   3
 *
 * Idea:
 *
 * Recursively:
 * Two trees are a mirror reflection of each other if:
 * 1. Their two roots have the same value.
 * 2. The right subtree of each tree is a mirror reflection of the left subtree of the other tree.
 *
 * Iteratively:
 * Same idea as recursion. Use a queue to store the nodes in opposite position. Each time extract
 * two nodes from the queue and compare the value.
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
 * Recursion
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
  return isMirror(root, root)
}

let isMirror = function(t1, t2) {
  if (t1 === null && t2 === null) {
    return true
  }

  if (t1 === null || t2 === null) {
    return false
  }

  return (
    t1.val === t2.val &&
    isMirror(t1.left, t2.right) &&
    isMirror(t1.right, t2.left)
  )
}

/**
 * Iteration
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
  let queue = []
  queue.push(root, root)

  while (queue.length > 0) {
    let t1 = queue.shift()
    let t2 = queue.shift()

    if (t1 === null && t2 === null) {
      continue
    }

    if (t1 === null || t2 === null) {
      return false
    }

    if (t1.val !== t2.val) {
      return false
    }

    queue.push(t1.left)
    queue.push(t2.right)
    queue.push(t1.right)
    queue.push(t2.left)
  }

  return true
}
