class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const tempStorage = []
        const mapper = {
            ')':'(',
            ']':'[',
            '}':'{'
        }
        for(const item of s) {
            if (tempStorage.length === 0) {
                tempStorage.push(item)
            } else {
                const lastIndex = tempStorage.length - 1
                const lastItem = tempStorage[lastIndex]
                const expectedItem = mapper[item]
                if (lastItem === expectedItem) {
                    tempStorage.pop()
                } else {
                    tempStorage.push(item)
                }
            }
        }
        return tempStorage.length === 0
    }
}
