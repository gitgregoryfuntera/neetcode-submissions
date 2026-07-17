class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output = [];
        for(let i = 0; i < strs.length; i++) {
            const tempArr = []
            const currentItem = strs[i]
            tempArr.push(currentItem)
            for(let j = i + 1; j < strs.length; j++) {
                const targetItem = strs[j]
                let tempTargetSort = targetItem.split('').sort().join('')
                let tempCurrentItem = currentItem.split('').sort().join('')
                
                if (tempTargetSort === tempCurrentItem) {
                    tempArr.push(targetItem)
                    strs.splice(j, 1);
                    j--;
                }
            }
            output.push(tempArr)
        }

        return output
    }
}
