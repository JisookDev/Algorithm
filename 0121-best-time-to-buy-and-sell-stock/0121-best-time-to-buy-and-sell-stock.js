/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    
    for(let i=1; i<prices.length; i++) {
        let sell = prices[i];
        let profit = sell - minPrice;
        
        maxProfit = Math.max(maxProfit, profit);
        
        if(sell < minPrice) {
            minPrice = sell;
        }
    }
    return maxProfit;
};