/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let index = 0;
  let afterJumpIndex = 0;
  const lastIndex = nums.length - 1;
  
  if (!lastIndex) return true;

  while (index < lastIndex) {
    afterJumpIndex = Math.max(afterJumpIndex, index + nums[index]);
    if (afterJumpIndex >= lastIndex) return true;
    if (afterJumpIndex <= index && nums[index] === 0) return false;
    index++;
  }

  return false;
};