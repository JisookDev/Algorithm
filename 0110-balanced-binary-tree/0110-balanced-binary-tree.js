/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 var isBalanced = function(root) {
  const bfs = (node) => {
    if (!node) return 0;
    let left = 1 + bfs(node.left);
    let right = 1 + bfs(node.right);
    if (Math.abs(left - right) > 1) return Infinity;
    return Math.max(left, right);
  };
  return bfs(root) === Infinity ? false : true;
};