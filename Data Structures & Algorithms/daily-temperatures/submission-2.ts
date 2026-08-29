class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const output = new Array(temperatures.length).fill(0)
        const stack = []
        for(let i = 0; i < temperatures.length; i++) {
            const item = temperatures[i]
            if (stack.length === 0) {
                stack.push([item, i])
            } else {
                while(stack.length > 0 && item > stack[stack.length - 1][0]) {
                    const [stackItem, stackIndex] = stack.pop()
                    output[stackIndex] = i - stackIndex
                }
                stack.push([item,i])
            }
        }
        return output
    }
}
