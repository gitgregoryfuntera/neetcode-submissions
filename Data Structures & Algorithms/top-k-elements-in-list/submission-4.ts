class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const mapper: Record<string, number> = {}
        const highestValues = []
        for(const item of nums) {
            const existingItem = mapper[item]
            if (existingItem === undefined) {
                mapper[item] = 0
            } else {
                mapper[item]= existingItem + 1
            }
        }
        console.log(mapper)
        const getValuesFromMapper =  Object.entries(mapper).sort((a, b) => b[1] - a[1]);
        for(let i = 0; i<k;i++) {
            const item = Number(getValuesFromMapper[i][0])
            highestValues.push(item)
        }
        return highestValues
    }
}
