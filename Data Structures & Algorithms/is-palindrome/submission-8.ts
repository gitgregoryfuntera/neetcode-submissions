class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const convertedString = s.toLowerCase()
            .replace(/\s/g, "")
            .replace(/[^a-zA-Z0-9]/g, "")
        let reversedString = ''
        for(let i = (convertedString.length - 1); i >= 0; i--) {
            const char = convertedString[i]
            reversedString += char
        }

        return convertedString === reversedString
    }
}
