class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const mapper = new Map()
        let maxWidth = 0
        let maxFreq = 0
        let leftPointer = 0
        let maxOutput = 0
        for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
            const char = s[rightPointer]
            const existingItem = mapper.get(char)
            if (!existingItem) {
                mapper.set(char, 1)
            } else {
                mapper.set(char, existingItem + 1)
            }

            maxFreq = Math.max(...mapper.values())
            maxWidth = (rightPointer - leftPointer) + 1
            let isValid = maxWidth - maxFreq > k
            while(isValid) {
                const itemLeft = s[leftPointer]
                const existingItem = mapper.get(itemLeft)
                mapper.set(itemLeft, existingItem - 1)

                leftPointer++
                maxWidth = (rightPointer - leftPointer) + 1
                maxFreq = Math.max(...mapper.values())
                isValid = maxWidth - maxFreq > k
            }
            const total = Array.from(mapper.values()).reduce((sum, value) => sum + value, 0)
            maxOutput = Math.max(total, maxOutput)
        }

        return maxOutput
    }
}
