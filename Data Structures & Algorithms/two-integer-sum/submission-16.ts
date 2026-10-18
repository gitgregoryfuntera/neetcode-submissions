class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const mapper = new Map()
        for(let i = 0; i < nums.length; i++) {
            const value = nums[i]
            mapper.set(value, i)
            
        }

        for(let i = 0; i < nums.length; i++) {
            const value = nums[i]
            const difference = target - value
            const existingItem = mapper.get(difference)
            if (existingItem !== i && existingItem !== undefined) {
                return [i, existingItem]
            }
        }
        

        return []
    }
}
