class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const sorted = nums.sort((a,b) => a - b)
        let maxSeq = 0
        let currentSeq = 1
        for(let i = 0; i < sorted.length; i++) {
            const item = sorted[i]
            const nextItem = sorted[i + 1]
            
            if (nextItem === (item + 1)) {
                currentSeq += 1
            } else if (nextItem !== item + 1 && nextItem !== item) {
                maxSeq = Math.max(currentSeq, maxSeq)
                currentSeq = 1
            }
        } 
        return maxSeq
    }
}
