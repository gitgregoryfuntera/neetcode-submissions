class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const mapper = new Map()
        for(const item of strs) {
            const sortedItem = item.split('').sort().join('')
            const existingItem = mapper.get(sortedItem)
            if (existingItem) {
                mapper.set(sortedItem, [...existingItem, item])
            } else {
                mapper.set(sortedItem, [item])
            }
        }
        
        return [...mapper.values()]
    }
}
