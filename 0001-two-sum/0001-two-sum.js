/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //객체로 만듦. {index: value} 일차적으로 전체 순회하면서 만들고, 배열.indexOf(target - 객체[i]) 한 값이 있으면 반환.
    const obj = {};
    nums.map((num, index) => {
        obj[num] = index;
    });
    
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] >= 0 && i !== obj[target - nums[i]]) {
            return [i, obj[target - nums[i]]]
        }

    }
    
    return false;

};