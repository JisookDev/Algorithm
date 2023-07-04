/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
  const result = nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (result[0] === 0) return '0';

  return result.join("");
};