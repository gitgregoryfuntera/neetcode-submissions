class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a,b) => a-b)
        const hashMap = {}
        for(let i = 0; i < sortedNums.length; i++) {
            let leftPointer = i + 1
            let rightPointer = sortedNums.length - 1
            const currentItem = sortedNums[i]
            while (leftPointer < rightPointer) {
                const leftItem = sortedNums[leftPointer]
                const rightItem = sortedNums[rightPointer]
                const value = currentItem + leftItem + rightItem
                if (value === 0) {
                    hashMap[`[${currentItem},${leftItem},${rightItem}]`] = [currentItem, leftItem, rightItem]
                    leftPointer++
                }

                if (value < 0) {
                    leftPointer++
                }

                if (value > 0) {
                    rightPointer--
                }
            }
        }

        return Object.values(hashMap)
    }
}
