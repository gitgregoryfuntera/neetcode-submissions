class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0
        let minPrice = 0
        for(let i = 0; i < prices.length; i++) {
            const item = prices[i]
            if (i === 0) {
                minPrice = item
            } else {
                const profit = item - minPrice
                maxProfit = Math.max(maxProfit, profit)
                if (item < minPrice) {
                    minPrice = item
                }
            }
        }

        return maxProfit
    }
}
