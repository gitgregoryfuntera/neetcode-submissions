class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const tempSet = {};
        for(let i = 0; i < nums.length; i++) {
            const item = nums[i]
            if (tempSet[item]) {
                return true
            } else {
                tempSet[item] = true
            }
        }
        return false;
    }
}
