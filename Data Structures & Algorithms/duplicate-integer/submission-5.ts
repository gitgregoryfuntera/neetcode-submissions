class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const setTable = new Set()
        for(const i of nums) {
            if (setTable.has(i)) {
                return true
            } else {
                setTable.add(i)
            }
        }
        return false
    }
}
