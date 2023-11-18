/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    result = Math.max(result, prices[i] - min);
  }
  return result;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
