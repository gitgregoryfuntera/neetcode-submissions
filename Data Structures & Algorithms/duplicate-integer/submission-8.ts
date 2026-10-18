class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const items = new Set<number>()
        for (const value of nums) {
            if (items.has(value)) {
                return true
            } else {
                items.add(value)
            }
        }

        return false

    }
}
