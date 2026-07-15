class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {
            return false;
        }

        let tempMapS = {}
        for(let c of s) {
            if (tempMapS[c]) {
                tempMapS[c] += 1
            } else {
                tempMapS[c] = 1
            }
        }

        let tempMapT = {}
        for(let c of t) {
            if (tempMapT[c]) {
                tempMapT[c] += 1
            } else {
                tempMapT[c] = 1
            }
        }
        
        for(let obj in tempMapS) {
            if (tempMapS[obj] !== tempMapT[obj]) {
                return false
            }
        }

        return true;
        
    }
}
