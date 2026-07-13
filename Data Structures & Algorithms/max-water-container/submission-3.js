class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let leftPointer = 0
        let rightPointer = heights.length - 1
        let maxContainer = 0
        while(leftPointer < rightPointer) {
            const leftValue = heights[leftPointer]
            const rightValue = heights[rightPointer]
            const maxLength = Math.min(leftValue, rightValue)
            const maxWidth = rightPointer - leftPointer
            const currentContainer = maxLength * maxWidth
            console.log(currentContainer, 'currentContainer')
            maxContainer = Math.max(maxContainer,currentContainer)

            if (leftValue < rightValue) {
                leftPointer++;
            } else {
                rightPointer--;
            } 
        }
       return maxContainer
    }
}


//  let startingHighestBar = 0
//         let startingHighestBarIdx = 0
//         for(let i = 0; i < heights.length; i++) {
//             if (i!== heights.length - 1) {
//                 const value = heights[i]
//                 if (startingHighestBar < value) {
//                     startingHighestBar = value
//                     startingHighestBarIdx = i
//                 }
//             }excalidraw.com
//         }

//         let endingHighestBar = 0
//         let endingHighestBarIdx = 0
//         let maxContainer = 0
//         let tempStartingIdx = startingHighestBarIdx
//         while(tempStartingIdx < heights.length) {
//             if (tempStartingIdx !== startingHighestBarIdx) {
//                 const currentBar = heights[tempStartingIdx]
//                 const tempRange = tempStartingIdx - startingHighestBarIdx
//                 endingHighestBar = tempRange * currentBar
//                 console.log(maxContainer, tempRange)
//                 if (maxContainer < endingHighestBar) {
//                     maxContainer = endingHighestBar
//                 }
//             }
//             tempStartingIdx++;
//         }
//         return maxContainer
