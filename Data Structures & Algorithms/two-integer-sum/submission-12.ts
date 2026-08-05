class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashTable = {}
        for(let i = 0; i < nums.length; i++) {
            const value = nums[i]
            hashTable[value] = i
        }

        for(let i = 0; i < nums.length; i++) {
            const value = nums[i]
            const targetValue = target - value
            if (hashTable[targetValue] !== undefined && hashTable[targetValue] !== i) {
                return [i, hashTable[targetValue]]
            }
        }

        return []
    }
}
