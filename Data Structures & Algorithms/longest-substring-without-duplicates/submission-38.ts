class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const hashMap = new Set()
        let leftPointer = 0
        let rightPointer = 0
        let maxOutput = hashMap.size
        while(rightPointer < s.length) {
            const charRight = s[rightPointer].charCodeAt(0)
            if (!hashMap.has(charRight)) {
                hashMap.add(charRight)
                rightPointer++
            } else if (hashMap.has(charRight)) {
                const firstItem = hashMap.values().next().value;
                hashMap.delete(firstItem)
                leftPointer++
            }
            maxOutput = Math.max(hashMap.size, maxOutput)
            
        }
        return maxOutput
    }
}
