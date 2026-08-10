class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0
        let minPrice = prices[0]
        for(let i = 1; i < prices.length; i++) {
            const item = prices[i]
            const profit = item - minPrice
            maxProfit = Math.max(maxProfit, profit)
            if (item < minPrice) {
                minPrice = item
            }
        }

        return maxProfit
    }
}
