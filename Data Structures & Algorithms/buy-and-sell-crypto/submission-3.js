class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let output = 0
        for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                const difference = prices[j] - prices[i]
                output = Math.max(difference, output) 
            }
        }
        return output
    }
}
