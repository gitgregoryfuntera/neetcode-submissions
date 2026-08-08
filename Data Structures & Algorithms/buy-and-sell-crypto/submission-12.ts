class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let low = 0 
        let high = low + 1
        let maxVal = 0
        while(high < prices.length) {
            const lowVal = prices[low]
            const highVal = prices[high]
            if (lowVal < highVal) {
                const val = highVal - lowVal
                maxVal = Math.max(maxVal,val)
            } else {
                low = high
            }
            high++
        }
        return maxVal
    }
}
