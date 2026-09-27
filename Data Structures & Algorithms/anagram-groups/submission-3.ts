class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
       const tempMapper = {}
       const output = []
       for(let i = 0; i < strs.length; i++) {
            const value = strs[i].split('').sort().join('')
            if (tempMapper[value] === undefined) {
                tempMapper[value] = [strs[i]]
            } else {
                const existingValue = tempMapper[value]
                tempMapper[value] = [...existingValue, strs[i]]
            }
       }

       return Object.values(tempMapper)
    }
}
