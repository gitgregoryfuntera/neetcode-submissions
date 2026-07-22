class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output = []
        for(let i = 0; i < nums.length; i++) {
            let item = 1;
            let isRunning = true
            let counter = 0
            let tempItem = 1
            while (isRunning) {
                let value = 1
                const currentValue = nums[counter]
                if (i !== counter) {
                    value = currentValue
                }
                tempItem = value * tempItem
                counter++
                if (counter >= nums.length) {
                    item = tempItem
                    isRunning = false
                }
                
            }
            counter = 0
            output.push(item)
        }
        return output
    }
}
