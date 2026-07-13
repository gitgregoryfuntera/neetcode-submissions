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
        for(let i = 0; i < s.length; i++) {
            const leftValue = s[i]
            records.add(leftValue)
            for(let j = i + 1; j < s.length; j++) {
                const rightValue = s[j]
                if (!records.has(rightValue)) {
                    records.add(rightValue)
                } else {
                    count = Math.max(records.size, count)
                    records = new Set()
                }
            }
            count = Math.max(records.size, count)
        }
        return count
    }
}
