class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length === 1) {
            return s2.includes(s1)
        }
        const s1Record = s1.split('').sort()
        const s1WindowLength = s1.length
        let leftPointer = 0
        let rightPointer = 0
        while(leftPointer < s2.length) {
            rightPointer = leftPointer + 1
            const leftValue = s2[leftPointer]
            let tempArray = [leftValue]
            let isProcessing = true
            while(isProcessing) {
                const rightValue = s2[rightPointer]
                tempArray.push(rightValue)
                if ((tempArray.length === s1WindowLength) || rightPointer === s2.length - 1) {
                    const filteredArray = tempArray.filter(item => item!== undefined)
                    const tempRecord = filteredArray.sort()
                    const isValid = JSON.stringify(tempRecord) === JSON.stringify(s1Record)
                    if (isValid) {
                        return true
                    }
                    tempArray = []
                    isProcessing = false
                }
                rightPointer++
            }
            leftPointer++
        } 
        return false
    }
}


