/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let max_income = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      max_income = Math.max(max_income, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right += 1;
  }
  
  return max_income;
};