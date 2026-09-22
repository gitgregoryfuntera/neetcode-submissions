class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isPalindrome(s: string): boolean {
        const regex = /^[a-zA-Z0-9]$/;
        const splitted = s.split('')
            .filter((value) => regex.test(value))
            .map((value) => value.toLowerCase())
        let leftPointer = 0
        let rightPointer = splitted.length - 1
        console.log(splitted)
        while (leftPointer < rightPointer) {
            const leftItem = splitted[leftPointer]
            const rightItem = splitted[rightPointer]
            if (leftItem.toLowerCase() === rightItem.toLowerCase()) {
                leftPointer++
                rightPointer--
            } else {
                return false
            }


        }
        return true
    }

    isCharacter(char: string) {
        return char.toLowerCase() !== char.toUpperCase();
    }

    isNumber(char: string) {
        const converted = Number(char)
        return  char.trim() !== "" && !isNaN(converted);
    }
}
