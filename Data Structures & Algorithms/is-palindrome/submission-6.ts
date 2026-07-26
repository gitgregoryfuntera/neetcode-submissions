class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const stripped = s.replace(' ', '').replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let pointerLeft = 0
        let pointerRight = stripped.length - 1

        while(pointerLeft < pointerRight) {
            const leftItem = stripped[pointerLeft]
            const rightItem = stripped[pointerRight]
            if (leftItem !== rightItem) {
                return false;
            }
            pointerLeft++;
            pointerRight--;
        }

        return true
    }
}
