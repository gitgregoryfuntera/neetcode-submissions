class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let curSum = 0
        let maxOutput = -Infinity
        for(let i = 0; i < nums.length; i++) {
            const item = nums[i]
            curSum += item
            maxOutput = Math.max(curSum, maxOutput)
            if (curSum < 0) {
                curSum = 0
            }
        }
        return maxOutput
    }
}
