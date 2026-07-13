class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 1) {
            return 1
        }
        let records = new Set()
        let count = 0
        let rightPointer = 0
        for(let i = 0; i < s.length; i++) {
            const value = s[i]
                while(records.has(value)) {
                    const recordValue = s[rightPointer]
                    records.delete(recordValue)
                    rightPointer++
                }
 
             records.add(value)
             console.log(i, rightPointer)
            count = Math.max(i - rightPointer + 1, count)
        }
        return count
    }
}
