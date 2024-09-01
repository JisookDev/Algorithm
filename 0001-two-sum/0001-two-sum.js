/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {};
    nums.forEach((num, index) => obj[num] = index) ;
    
    for (let i = 0; i < nums.length ; i++) {
        if (obj[target - nums[i]] && i !== obj[target - nums[i]]) {
            return [i, obj[target - nums[i]]]
        }
    }
};