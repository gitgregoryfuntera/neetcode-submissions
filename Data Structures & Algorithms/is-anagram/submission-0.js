class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // create variable that stores and inputs so that manipulate them
        const firstInput = s.split('')
        const secondInput = t.split('')

        if (firstInput.length !== secondInput.length) {
            return false
        }

        const sortedFirstInput = firstInput.sort()
        const sortedSecondInput = secondInput.sort()

        return JSON.stringify(sortedFirstInput) === JSON.stringify(sortedSecondInput)
    }
}
