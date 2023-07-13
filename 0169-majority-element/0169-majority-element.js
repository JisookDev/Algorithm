/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const numObject = {};
  nums.forEach((num) => {
    numObject[num] ? numObject[num] += 1 : numObject[num] = 1;
  });

  for (key in numObject) {
    if (numObject[key] > nums.length / 2) {
      return key;
    } 
  }
};