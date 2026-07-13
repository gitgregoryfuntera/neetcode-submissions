class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // O(n)^2
        // let output = 0
        // for(let i = 0; i < prices.length; i++) {
        //     for(let j = i + 1; j < prices.length; j++) {
        //         const difference = prices[j] - prices[i]
        //         output = Math.max(difference, output) 
        //     }
        // }
        // return output

        let output = 0
        let leftPointer = 0
        let rightPointer = leftPointer + 1
        while (rightPointer < (prices.length)) {
            const leftValue = prices[leftPointer]
            const rightValue = prices[rightPointer]
            console.log(rightValue, leftValue)
            const difference = rightValue - leftValue
            console.log(difference)
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
