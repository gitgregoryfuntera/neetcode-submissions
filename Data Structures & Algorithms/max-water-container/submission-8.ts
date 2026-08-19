class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftPointer = 0
        let rightPointer = (heights.length - 1)
        let maxVol = 0
        while(leftPointer < rightPointer) {
            const leftHeightValue = heights[leftPointer]
            const rightHeightValue = heights[rightPointer]
            const maxHeight = leftHeightValue > rightHeightValue ? rightHeightValue : leftHeightValue
            const maxWidth = (rightPointer + 1) - (leftPointer + 1)
            maxVol = Math.max((maxHeight * maxWidth), maxVol)
            if (leftHeightValue < rightHeightValue) {
                leftPointer++
            } else if (leftHeightValue > rightHeightValue) {
                rightPointer--
            } else {
                leftPointer++
            }
            
        }
        return maxVol
    }
}
