class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // store in hashMap
        const hashMap = {}
        // sort 
        const sortedNums = nums.sort()
        sortedNums.forEach((num) => {
            if (hashMap[num] === undefined) {
                hashMap[num] = 1
            } else {
                hashMap[num] = hashMap[num] + 1
            }
        })

        return Object.entries(hashMap)
            .map(([key, item]) => ({
                key,
                freq: item
            }))
            .sort((a,b) => b.freq - a.freq)
            .map((value) => Number(value.key))
            .slice(0, k) 
    }
}
