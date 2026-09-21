class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false
        }
        const map = new Map()
        for(const item of s) {
            if (map.has(item)) {
                const value = map.get(item)
                map.set(item, value + 1)
            } else {
                map.set(item, 1)
            }
        }

        for(const item of t) {
            if (map.has(item)) {
                const value = map.get(item)
                map.set(item, value - 1)
            }
        }
        return [...map.values()].filter((value) => value !== 0).length === 0
    }
}
