/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let cur = head
        const map = new Set()
        while (cur) {
            if (map.has(cur)) {
                return true
            } else {
                map.add(cur)
            }
            cur = cur.next
        }
        return false
    }
}
