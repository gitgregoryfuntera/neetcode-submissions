class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
        // prefix = 1 => 2 => 8
        // postfix = 1 => 6 => 24 => 48
        // [1,2,4,6]
        // [1,1,2,8]
        // [48,24,12,8]
        let prefix = 1
        let prefixArr = []
        nums.forEach((num,idx) => {
            if (idx === 0) {
                prefixArr.push(1)
            } else {
                const value = prefix * nums[idx - 1]
                prefix = value
                prefixArr.push(value)
            }
        })
        let postfix = 1
        console.log(prefixArr)
        for (let i = (nums.length - 1); i >= 0; i--) {
            const value = nums[i]
            const prefixValue = prefixArr[i]
            console.log(value, prefixValue)
            if (i === (nums.length - 1)) {
                const currentValue = postfix * prefixValue
                output[i] = currentValue
            } else {
                const value = (nums[i + 1] * postfix)
                postfix = value
                output[i] = (value * prefixValue)
            }
        }
        // nums.forEach((num, idx) => {
        //     let forStoringValue = 1
        //     for(let secondLoopIdx = 0; secondLoopIdx < nums.length; secondLoopIdx++) {
        //         const currentValue = nums[secondLoopIdx]
        //         if (idx !== secondLoopIdx) {
        //              forStoringValue = forStoringValue * currentValue
        //         }
        //     }
        //     output.push(forStoringValue)
        // })
        return output
    }
}
