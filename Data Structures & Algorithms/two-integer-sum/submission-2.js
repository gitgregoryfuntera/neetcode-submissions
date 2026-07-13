class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // let i = 0
        // let j = i + 1
        // while(i < nums.length) {
        //     while(j < nums.length) {
        //         const firstInput = nums[i]
        //         const secondInput = nums[j]
        //         if ((firstInput + secondInput) === target) {
        //             return [i, j]
        //         }
        //         j++;
        //     }
        //     i++;
        //     j = i + 1;
        // }
        // O (n)^2
        // O (n)


        /** 
         * nums=[3,4,5,6]
         * target=7
         * {3: 0}
         * 7 - 3 = 4
         * 7 - 4 = 3
         * nums = [4,5,6]
         * target = 10
         * {6: 4, 5: 5,  }
         * 10 - 4 = 6
         * 10 - 5 = 5
         * 10 - 6 = 4
         * nums = [3, 5, 7, 8]
         * target = 13
         * {3: 0, 5: 1, 7: 2}
         * 13 - 3 = 10
         * 13 - 5 = 8
         * 13 - 7 = 6
         * 13 - 8 = 5 
        */
        const hashMap = {}
        for(let i = 0; i < nums.length; i++) {
            const value = nums[i]
            const output = target - value
            if (hashMap[output] !== undefined) {
                return [hashMap[output], i]
            } else {
                hashMap[value] = i
            }
        }
        return []
    }
}
