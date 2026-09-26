class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let maxOutput = 0
        const set = new Set()
        let l = 0
        for(let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l])
                l++
            }
            set.add(s[r]);
            maxOutput = Math.max(maxOutput, r - l + 1)
        }

        return maxOutput
    }
}
