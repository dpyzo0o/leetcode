/**
 *
 * Source: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 * Date  : 2018-06-29
 *
 * Given an array where elements are sorted in ascending order, convert it to a height
 * balanced BST. For this problem, a height-balanced binary tree is defined as a binary
 * tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * Example:
 *
 * Given the sorted array: [-10, -3, 0, 5, 9],
 * One possible answer is: [0, -3, 9, -10, null, 5], which represents the following height
 * balanced BST:
 *
 *      0
 *     / \
 *   -3   9
 *   /   /
 * -10  5
 *
 *
 * Idea:
 *
 * A binary search tree is a rooted binary tree, whose internal nodes each store a key
 * (and optionally, an associated value) and each have two distinguished sub-trees, commonly
 * denoted left and right. The tree additionally satisfies the binary search property, which
 * states that the key in each node must be greater than or equal to any key stored in the
 * left sub-tree, and less than or equal to any key stored in the right sub-tree.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (!nums) return null;

  const helper = (low, high) => {
    if (low > high) return null;

    const mid = Math.floor((low + high) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = helper(low, mid - 1);
    root.right = helper(mid + 1, high);

    return root;
  };

  return helper(0, nums.length - 1);
};
