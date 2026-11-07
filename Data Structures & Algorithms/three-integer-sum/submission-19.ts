class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a,b) => a - b)
        const hashSet = new Set()
        for(let i = 0; i < sortedNums.length; i++) {
            const item = sortedNums[i]
            let leftPointer = i + 1
            let rightPointer = (sortedNums.length - 1)
            while (leftPointer < rightPointer) {
                const leftValue = sortedNums[leftPointer]
                const rightValue = sortedNums[rightPointer]
                const value = item + leftValue + rightValue
                if (value === 0) {
                    const key = [item, leftValue, rightValue]
                    hashSet.add(key.toString())
                    leftPointer++
                    rightPointer--
                } else if (value > 0) {
                    rightPointer--
                } else if (value < 0) {
                    leftPointer++
                } else {
                    leftPointer++
                    rightPointer--
                }
            }
        }
        const stringValue = [...hashSet.keys()]
        const value = stringValue.map((value: string) => value.split(',').map(item => +item))
        return value
    }
}
