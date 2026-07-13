class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // O(n)
        let output = 0
        let leftPointer = 0
        let rightPointer = leftPointer + 1
        while (rightPointer < (prices.length)) {
            const leftValue = prices[leftPointer]
            const rightValue = prices[rightPointer]
            const difference = rightValue - leftValue
            output = Math.max(difference, output)
            if (rightValue < leftValue) {
                leftPointer = rightPointer
                rightPointer = leftPointer + 1
            } else {
                rightPointer++
            }
        }
        return output
    }
}
