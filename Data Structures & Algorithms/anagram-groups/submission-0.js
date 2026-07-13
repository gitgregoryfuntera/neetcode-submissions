class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a hashMap record
        const hashMap = {}
        // iterate
        strs.forEach((str, i) => {
            const sortedStr = str.split('').sort().toString().replaceAll(',', '')
            if (hashMap[sortedStr] !== undefined) {
                const existingValues = hashMap[sortedStr]
                hashMap[sortedStr] = [...existingValues, str]
            } else {
                hashMap[sortedStr] = [str]
            }
        })

        const convertedToArray = Object.entries(hashMap).map(([key, item]) => item)
        return convertedToArray
    }
}
