class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsMap = new Set(nums)
        let currentLongest = 0
        for(let i = 0; i < nums.length; i++) {
            const value = nums[i]
            const startSeq = value - 1
            const isStartSeq = numsMap.has(startSeq)
            if (!isStartSeq) {
                let longestValue = 0
                let isProcessing = true
                let initialValue = value
                while(isProcessing) {
                    let startValue = initialValue
                    const existingSeq = numsMap.has(startValue)
                    if (existingSeq) {
                        longestValue += 1
                        initialValue += 1
                    } else {
                        isProcessing = false
                    }
                }
                currentLongest = Math.max(longestValue, currentLongest)
            }

        }

        return currentLongest
    }
}