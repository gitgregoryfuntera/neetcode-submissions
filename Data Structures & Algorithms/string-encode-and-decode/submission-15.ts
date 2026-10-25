class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let output = ''
        for(const str of strs) {
            const lengthOfString = str.length
            output += `#${lengthOfString}-${str}`
        }
        return output
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const output = []
        console.log(str)
        for(let i = 0; i < str.length; i++) {
            let item = str[i]
            const limit = Number(str[i + 1])
            let stringLimit = ''
            if (item === '#' && typeof limit  === 'number' && !Number.isNaN(limit)) {
                let counter = i + 1
                let currentItem = str[counter]
                while (currentItem !== '-') {
                    currentItem = str[counter]
                    if (currentItem !== '-') {
                        stringLimit += currentItem
                    }
                    counter++
                }
                const convertedLimit = Number(stringLimit)
                let conCounter = 1
                let advanceCounter = 2
                if (convertedLimit > 9 && convertedLimit < 99) {
                    advanceCounter = 3
                } else if (convertedLimit > 99) {
                    advanceCounter = 4
                }
                let stringOut = ''
                console.log(advanceCounter)
                
                while (conCounter <= convertedLimit) {
                    const char = str[i + advanceCounter + conCounter]
                    stringOut += char
                    conCounter++
                }
                    output.push(stringOut)
                }
                
            }
            
        return output
    }
}
