class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const record = new Set()
        for(const item of nums) {
            if (record.has(item)) {
                return true
            } else {
                record.add(item)
            }
        }

        return false
    }
}
