class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        const hashMap = new Map()
        let currentSum = 0
        let output = 0
        hashMap.set(0, 1)
        for(const item of nums) {
            const value = currentSum + item
            const hashKey = value - k
            if (hashMap.has(hashKey)) {
                const hashValue = hashMap.get(hashKey)
                output += hashValue
            }
            const existingValue = hashMap.get(value) ?? 0
            hashMap.set(value, existingValue + 1)
            currentSum = value
        }
        return output
    }
}
