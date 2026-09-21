class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sortedS = s.split('').sort()
        const sortedT = t.split('').sort()
        return JSON.stringify(sortedS) === JSON.stringify(sortedT)
    }
}
