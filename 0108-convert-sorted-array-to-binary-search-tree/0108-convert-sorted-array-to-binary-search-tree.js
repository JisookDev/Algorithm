/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    //중간값 잡아서 왼쪽 정렬. 오른쪽 정렬. -> 왼쪽 재귀. 오른쪽 재귀
    //탈출 조건 만들기
    if (nums.length === 1) {
        return new TreeNode(nums[0]);
    }
    
    if (nums.length === 0) {
        return null
    }
    
    let center = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[center]);
    root.left = sortedArrayToBST(nums.slice(0,center));
    root.right = sortedArrayToBST(nums.slice(center + 1));
    
    return root
};