class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let output = 0
        let leftPointer = 0
        let record = new Map()
        for(let rightPointer = 0; rightPointer < s.length; rightPointer++) {
            let windowLength = rightPointer - leftPointer + 1
            
            const rightValue = s[rightPointer]

            if (!record.has(rightValue)) {
                record.set(rightValue, 1)
            } else {
                const recordedRightValue = record.get(rightValue)
                record.set(rightValue, recordedRightValue + 1)
            }
            const highestValue = Math.max(...record.values())
            const isValid = (windowLength - highestValue) <= k
            console.log(isValid)
            if (isValid) {
                output = Math.max(output, windowLength)
            } else {
                console.log(windowLength)
                let isProcessing = true
                while(isProcessing) {
                    leftPointer++
                    let windowLengthInner = rightPointer - leftPointer + 1
                    const existingLeftValue = s[leftPointer - 1]
                    console.log(existingLeftValue, 'existingLeftValue')
                    if (record.has(existingLeftValue)) {
                        const prevLeftValue = record.get(existingLeftValue) 
                        record.set(existingLeftValue, prevLeftValue - 1)
                    }
                    console.log(record)
                    const highestValue = Math.max(...record.values())
                    const isValid = (windowLengthInner - highestValue) <= k
                    console.log(isValid, 'isValid')
                    if (isValid) {
                        output = Math.max(output, windowLengthInner)
                        isProcessing = false
                    }
                    
                }
            }
        }

        return output
    }

}



