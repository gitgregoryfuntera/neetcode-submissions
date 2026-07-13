class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const alphabeth = 'abcdefghijklmnopqrstuvwxyz0123456789'
        // remove all of the white spaces
        let sourceOfTruth = ''
        const removedWhiteSpaces = s.replaceAll(' ','').toLowerCase()
        for(let c  of removedWhiteSpaces) {
            if (alphabeth.includes(c)) {
                sourceOfTruth += c
            }
        }
        let reversedOrder = ''
        for(let i = (sourceOfTruth.length - 1); i >= 0; i--) {
            const reverseChar = sourceOfTruth[i]
            reversedOrder += reverseChar
        }
        return sourceOfTruth === reversedOrder
    }
}
