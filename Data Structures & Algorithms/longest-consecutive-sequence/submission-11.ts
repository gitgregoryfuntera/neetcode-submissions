class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // brute force approach
    // sorting the array in asc order
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) {
            return 0
        }
        const sortedNums = nums.sort((a,b) => a - b)
        const removedDups = []
        let longestSequence = 0
        for(let i = 0; i < sortedNums.length; i++) {
            const item = sortedNums[i]
            const prevItem = sortedNums[i - 1]
            if (i === 0) {
                removedDups.push(item)
            }
            if (prevItem !== undefined) {
                if (item !== prevItem) {
                    removedDups.push(item)
                }
            }
        }
        let currentItem = 0
        let currentLongestSequence = 1
        console.log(removedDups)
        for(let i = 0; i < removedDups.length; i++) {
            const item = removedDups[i]
            if (i === 0) {
              currentItem = item
            } else {
                const difference = item - currentItem
                console.log(item, currentItem, difference)
                if (difference === 1) {
                    currentLongestSequence += 1
                } else {
                    if (currentLongestSequence > longestSequence) {
                        longestSequence = currentLongestSequence
                    }
                                 currentLongestSequence = 1
                }
                currentItem = item
                console.log(currentLongestSequence, 'currentLongestSequence')
            }
        }

        if (longestSequence > currentLongestSequence) {
            return longestSequence
        } else {
            return currentLongestSequence
        }
    }
}
