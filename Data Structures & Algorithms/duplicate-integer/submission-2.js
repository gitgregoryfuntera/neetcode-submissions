class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // key is the value in the array
        // value is the index of the value
        const sortedNums = nums.sort((a,b) => a - b)
        const hashMap = {}
        for(let i = 0; i < sortedNums.length; i++) {
            const currentValue = sortedNums[i]
            console.log(hashMap[currentValue])
            if (hashMap[currentValue] === undefined) {
               hashMap[currentValue] = i
            } else {
                return true
            }
        }
        return false
    }
}
