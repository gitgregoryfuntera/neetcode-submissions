class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapper = {}
        for(const s of strs) {
            const sorted = s.split('').sort().join('')
            if (!mapper[sorted]) {
                mapper[sorted] = []
            }
            mapper[sorted].push(s)
        }
        return Object.values(mapper)
    }
}
