class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxValue = 0
        let LPointer = 0, RPointer = (heights.length - 1)
        while(LPointer < RPointer) {
            const LHeight = heights[LPointer]
            const RHeight = heights[RPointer]
            const CHeight = LHeight < RHeight ? LHeight : RHeight
            const CWidth = RPointer - ((LPointer + 1) - 1)
            const CValue = CWidth * CHeight
            maxValue = Math.max(CValue,maxValue)
            if (LHeight < RHeight) {
                LPointer++
            } else if (LHeight > RHeight) {
                RPointer--
            } else {
                LPointer++
                RPointer--
            }

        }
        return maxValue
    }
}
