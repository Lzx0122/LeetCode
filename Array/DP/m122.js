/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] > prices[i]) result += prices[i + 1] - prices[i];
  }
  return result;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
