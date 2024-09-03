/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums;
    
    for (const num of nums) {
        if ( nums.indexOf(num) === nums.lastIndexOf(num)) {
            return nums[nums.indexOf(num)]
        }
    }
};