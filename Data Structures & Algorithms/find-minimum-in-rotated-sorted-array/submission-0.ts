class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const sortedNums = nums.sort((a,b) => a - b)
        return sortedNums[0]
    }
}
