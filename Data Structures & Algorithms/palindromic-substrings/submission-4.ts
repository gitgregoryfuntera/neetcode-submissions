class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let output = 0
        for(let i = 0; i < s.length; i++) {
            // odd approach
            let oddLeftPointer = i
            let oddRightPointer = i
            while (oddRightPointer < s.length) {
                const oddCharLeft = s[oddLeftPointer]
                const oddCharRight = s[oddRightPointer]
                if (oddCharLeft === oddCharRight) {
                    output += 1
                } else {
                    break;
                }
                oddLeftPointer = oddLeftPointer - 1
                oddRightPointer = oddRightPointer + 1
            }
            // even approach
            let evenRightPointer = i + 1
            let evenLeftPointer = i
            while (evenRightPointer < s.length) {
                const evenCharRight = s[evenRightPointer]
                const evenCharLeft = s[evenLeftPointer]
                if (evenCharLeft === evenCharRight) {
                    output += 1
                    evenRightPointer = evenRightPointer + 1
                    evenLeftPointer = evenLeftPointer - 1
                } else {
                    break;
                }
            }
        }

        return output
    }
}
