class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphabeth = 'abcdefghijklmnopqrstuvwxyz0123456789'
        // remove all of the white spaces
        const sourceOfTruth = []
        const removedWhiteSpaces = s.replaceAll(' ','').toLowerCase()
        for(let c  of removedWhiteSpaces) {
            if (alphabeth.includes(c)) {
                sourceOfTruth.push(c)
            }
        }
        const reversedOrder = []
        for(let i = (sourceOfTruth.length - 1); i >= 0; i--) {
            const reverseChar = sourceOfTruth[i]
            reversedOrder.push(reverseChar)
        }
        return JSON.stringify(sourceOfTruth) === JSON.stringify(reversedOrder)
    }
}
