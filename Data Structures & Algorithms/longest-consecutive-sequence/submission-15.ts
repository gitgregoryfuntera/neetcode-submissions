class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const setTable = new Set<number>()
        for(const item of nums) {
            setTable.add(item)
        }
        let maxValue = 0
        for(const item of nums) {
            const prevItem = item - 1
            if (!setTable.has(prevItem)) {
                let isRunning = true
                let checkItem = prevItem
                let value = 0
                while (isRunning) {
                    checkItem++
                    if (setTable.has(checkItem)) {
                        value++
                    } else {
                        isRunning = false
                    }
                }
                maxValue = Math.max(maxValue, value)
            }
        }
        console.log(maxValue)
        return maxValue
    }
}
