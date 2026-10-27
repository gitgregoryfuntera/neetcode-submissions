class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const prefixArr = [1]
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]
            const product = value * prefixArr[i]
            if (prefixArr.length < nums.length) {
                prefixArr.push(product)
            }

        }

        const suffixArr = []
        suffixArr[nums.length - 1] = 1
        for (let i = nums.length - 1; i >= 0 ; i--) {
            const value = nums[i]
            const product = value * suffixArr[i]
            if (i - 1 >= 0) {
                suffixArr[i - 1] = product
            }
            
        }

        const output = []
        for (let i = 0; i < nums.length; i++) {
            const value = prefixArr[i] * suffixArr[i]
            output.push(value)
        }
        return output
    }
}
