class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const rightArr = [1]
        const leftArr = []
        const output = []
        for (let i = 0; i < nums.length; i++) {
            const item = nums[i]
            const lastItem = rightArr[i]
            const product = lastItem * item
            if (rightArr.length !== nums.length) {
                rightArr.push(product)
            }
            
        }
        leftArr[nums.length - 1] = 1
        for(let i = (nums.length - 1); i >= 0; i--) {
            const item = nums[i]
            const lastItem = leftArr[i]
            const product = lastItem * item
            const index = i - 1
            if (index >= 0) {
                leftArr[i - 1] = product
            }
            
        }

        for(let i = 0; i < nums.length; i++) {
            const rigthVal = rightArr[i]
            const leftVal = leftArr[i]
            const product = rigthVal * leftVal
            output.push(product)
        }

        return output
    }
}
