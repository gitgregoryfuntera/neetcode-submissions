class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let leftPointer = 0
        const map = new Map()
        let maxOutput = 0
        let maxFreq = 0
        let maxWidth = 0
        for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
            const itemRight = s[rightPointer]
            
            const existingItem = map.get(itemRight)
            
            if (existingItem) {
                map.set(itemRight, existingItem + 1)
            } else {
                map.set(itemRight, 1)
            }
            
            maxFreq = Math.max(...map.values())
            
            maxWidth = (rightPointer - leftPointer) + 1
            
            let isValid = (maxWidth - maxFreq) > k

            while (isValid) {
                const itemLeft = s[leftPointer]
                const existingItem = map.get(itemLeft)
                map.set(itemLeft, existingItem - 1)
                leftPointer++
                maxWidth = (rightPointer - leftPointer) + 1
                maxFreq = Math.max(...map.values())
                isValid = (maxWidth - maxFreq) > k
            }
            const total = Array.from(map.values()).reduce((sum, value) => sum + value, 0)
            maxOutput = Math.max(total, maxOutput)
        }
        
        return maxOutput
    }
}
