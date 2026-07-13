class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // [-1,0,1,2,-1,-4]
        // [[-1,-1,2],[-1,0,1]]
        let output = []
        const recordMap = []
        for(let  i = 0; i < nums.length; i++) {
            recordMap.push({
                index: i,
                value: nums[i]
            })
        }
        const mappedOutput = {}
        let pointerA = 0
        while(pointerA < nums.length) {
            let pointerB = 0
            while(pointerB < nums.length) {
                if (pointerA !== pointerB) {
                    const valueA = nums[pointerA]
                    const valueB = nums[pointerB]
                    const initialResult = valueA + valueB
                    const filteredValue = recordMap.find(item => {
                        const expectedValue = initialResult + item.value === 0
                        return expectedValue && item.index !== pointerA && item.index !== pointerB
                    })
                    if (filteredValue) {
                        const expectedOutput = [filteredValue.value, valueA, valueB].sort()
                        mappedOutput[expectedOutput] = expectedOutput
                    }
                    
                }
                pointerB++;
            }
            pointerA++;
        }
        const tempOutput = Object.entries(mappedOutput).map(([key, item]) => item)

        return tempOutput
    }
}
