class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const tempMap = {}
        for(let i = 0; i < nums.length; i++) {
            const item = nums[i]
            const value = target - item
            if (tempMap[value] === undefined) {
                tempMap[item] = i
            } else {
                const targetIndex = tempMap[value]
                return [targetIndex, i]
            }
        }
        return []
    }
}
