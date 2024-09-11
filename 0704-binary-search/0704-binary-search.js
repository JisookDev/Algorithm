/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0; 
    let end = nums.length - 1; //2
    let mid = Math.floor((start + end)/2); //1
    
    while(start <= end) {
        if (nums[mid] < target) {
            start = mid + 1;
            mid = Math.floor((start + end)/2);
        } else if (nums[mid] > target) {
            end = mid - 1;
            mid = Math.floor((start + end)/2);
        } else if (nums[mid] === target) {
            return mid;
        } else {
            return -1;
        }
    }
    
    return -1;
}; 

