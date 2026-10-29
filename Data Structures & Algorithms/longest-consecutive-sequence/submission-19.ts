class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const mapper = new Set(nums)
        let longest = 0
        for (const item of nums) {
            const target = item - 1
            if (!mapper.has(target)) {
                let currentCounter = 1
                let tempItem = item
                let isRunning = true
                while (isRunning) {
                    if (mapper.has(tempItem + 1)) {
                        currentCounter++
                    } else {
                        longest = Math.max(longest, currentCounter)
                        isRunning = false
                    }
                    tempItem++
                }
            }
        }
        return longest
    }
}
