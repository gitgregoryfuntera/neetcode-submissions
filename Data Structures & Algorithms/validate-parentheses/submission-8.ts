class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const mapper = {
            '}':'{',
            ']':'[',
            ')':'('
        }
        const formatArray = s.split('')

        if (formatArray.length === 1) {
            return false
        }

        const stack = []
        for(let i = 0; i < formatArray.length; i++) {
            const item = formatArray[i]
            if (mapper[item] === undefined) {
                stack.push(item)
            } else {
                const lastStackItem = stack[stack.length - 1]
                const expectedItem = mapper[item]
                if (lastStackItem === expectedItem) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }

        return stack.length === 0;
    }
}
