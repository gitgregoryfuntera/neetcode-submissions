class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0
        let j = i + 1
        /** 
         * nums = [4,5,6]
         * target = 10
         * {6: 4, 5: 5,  }
         * 10 - 4 = 6
         * 10 - 5 = 5
         * 10 - 6 = 4
         * nums = []
        */


        while(i < nums.length) {
            while(j < nums.length) {
                const firstInput = nums[i]
                const secondInput = nums[j]
                if ((firstInput + secondInput) === target) {
                    return [i, j]
                }
                j++;
            }
            i++;
            j = i + 1;
        }
        // O (n)^2
        // O (n)
        return []
    }
}
