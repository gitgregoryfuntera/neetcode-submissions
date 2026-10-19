class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapper = new Map()
        for(const item of nums) {
            const existingItem = mapper.get(item)
            if (existingItem) {
                mapper.set(item, existingItem + 1)
            } else {
                mapper.set(item, 1)
            }
        }
        const sortedValues = new Map([...mapper.entries()].sort((a, b) => b[1] - a[1]))
        const keys = [...sortedValues.keys()]
        let output = []
        for (let i = 0; i < k; i++) {
            const item = keys[i]
            output.push(item)
        }
        return output
    }
}
