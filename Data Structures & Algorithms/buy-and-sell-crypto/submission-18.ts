class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0]
        let maxProfit = 0
        for(let i = 1; i < prices.length; i++) {
            const item = prices[i]
            const profit = item - minPrice
            maxProfit = Math.max(maxProfit, profit)
            if (profit < 0) {
                minPrice = item
            }
        }

        return maxProfit
    }
}
