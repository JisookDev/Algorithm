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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
   
    const dfs = function (node) {
        if (!node) return null;
        if (node.val === val) return node;
        if (node.val < val) return dfs(node.right, val);
        if (val < node.val) return dfs(node.left, val);
    }
    
    return dfs(root);
    
};