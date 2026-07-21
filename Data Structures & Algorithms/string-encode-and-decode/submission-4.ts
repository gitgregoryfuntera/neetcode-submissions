class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const outputContainer = []
        for(const item of strs) {
            outputContainer.push(`-${item}`)
        }
        const output = outputContainer.join('')
        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
      
        return str.split('-').splice(1)
    }
}
