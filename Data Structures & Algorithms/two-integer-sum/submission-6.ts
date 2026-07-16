class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
       for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                const total = nums[i] + nums[j]
                if (total === target) {
                    return [i,j]
                }
            }
       }
    }
}
