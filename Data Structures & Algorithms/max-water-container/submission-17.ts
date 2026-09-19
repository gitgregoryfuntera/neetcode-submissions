class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftPointer = 0
        let rightPointer = heights.length - 1
        let maxOutput = 0
        while (leftPointer < rightPointer) {
            const leftHeight = heights[leftPointer]
            const rightHeight = heights[rightPointer]
            const minHeight = Math.min(leftHeight, rightHeight)
            const width = rightPointer - leftPointer
            const volume = minHeight * width
            maxOutput = Math.max(volume, maxOutput)
            if (leftHeight < rightHeight) {
                leftPointer++
            }

            else if (rightHeight < leftHeight) {
                rightPointer--
            }

            else {
                leftPointer++
            }
        }
        return maxOutput
    }
}
