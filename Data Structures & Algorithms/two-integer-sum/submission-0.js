class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0
        let j = i + 1
        while(i < nums.length) {
            while(j < nums.length) {
                const firstInput = nums[i]
                const secondInput = nums[j]
                if ((firstInput + secondInput) === target) {
                    return [i, j].sort((a,b) => a - b)
                }
                j++;
            }
            i++;
            j = i + 1;
        }

        return []
    }
}
