/**
 * @param {number[]} prices
 * @return {number}
 */

// This is tried with brute force technique but it doesn't work , why ? // Cause there is an constraint issue over thre , only 100000 length and 10000
var maxProfit = function (prices) {
  if (prices.length < 100000 || prices.length !== 0) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
      for (let j = i; j < prices.length; j++) {
        if (prices[j] - prices[i] <= 0) {
          if (maxProfit < 0) {
            maxProfit = 0;
          }
        } else if (prices[j] - prices[i] > maxProfit) {
          maxProfit = prices[j] - prices[i];
        }
      }
    }
    return maxProfit;
  }
};
