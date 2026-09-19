class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftArr = []
        const rightArr = []
        const output = []
        for(let i = 0; i < nums.length; i++) {
            if (i === 0) {
                leftArr.push(1)
            } else {
                const existingValue = leftArr[i - 1]
                const item = nums[i - 1]
                const value = item * existingValue
                leftArr.push(value)
            }
        }
        for(let i = (nums.length - 1); i >= 0; i--) {
            if (i === nums.length - 1) {
                rightArr[i] = 1
            } else {
                const existingValue = rightArr[i + 1]
                const item = nums[i + 1]
                const value = item * existingValue
                rightArr[i] = value
            }
        }
        
        for(let i = 0; i < nums.length; i++) {
            const value = leftArr[i] * rightArr[i]
            output.push(value)
        }

        return output
    }
}
