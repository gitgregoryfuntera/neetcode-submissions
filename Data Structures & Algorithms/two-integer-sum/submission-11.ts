class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = {}
        for(let i = 0; i < nums.length; i++) {
            const item = nums[i]
            hashMap[item] = i
        }

        for(let i = 0; i < nums.length; i++) {
            const item = nums[i]
            const difference = target - item
            if (hashMap[difference] !== undefined && hashMap[difference] !== i) {
                return [hashMap[difference], i]
            }
        }

        return []
    }
}
