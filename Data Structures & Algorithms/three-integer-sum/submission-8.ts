class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // sort the array
        const sortedArray = nums.sort((a,b) => a - b)
        const groupedSet = {}
        for(let i = 0; i < sortedArray.length; i++) {
            const firstItem = sortedArray[i]
            let low = i + 1
            let high = sortedArray.length - 1
            while (low < high) {
                const itemLow = sortedArray[low]
                const itemHigh = sortedArray[high]
                const value = firstItem + itemLow + itemHigh
                const key = `${firstItem},${itemLow},${itemHigh}`
                if (value === 0 && groupedSet[key] === undefined) {
                    groupedSet[key] = 1
                }
                if (value > 0) {
                    high--
                } else if (value < 0) {
                    low++
                } else {
                    low++
                    high--
                }
            }
        }
        const output = Object.keys(groupedSet).map((item) => item.split(',').map(Number))
 
        return output
    }
}
