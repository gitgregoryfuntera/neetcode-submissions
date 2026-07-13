class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
        nums.forEach((num, idx) => {
            let forStoringValue = 1
            for(let secondLoopIdx = 0; secondLoopIdx < nums.length; secondLoopIdx++) {
                const currentValue = nums[secondLoopIdx]
                if (idx !== secondLoopIdx) {
                     forStoringValue = forStoringValue * currentValue
                }
            }
            output.push(forStoringValue)
        })
        return output
    }
}
