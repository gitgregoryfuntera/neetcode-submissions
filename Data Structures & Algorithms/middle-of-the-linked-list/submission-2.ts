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
     * @return {ListNode}
     */
    middleNode(head: ListNode | null): ListNode {
        let curIterate = head
        let counter = 0
        while (curIterate) {
            counter++;
            curIterate = curIterate.next;
        }
        if (counter <= 1) {
            return head
        }
        const middle = Math.floor(counter / 2)
        let curFind = head
        let counterFind = 0
        while (curFind) {
            counterFind++
            if (counterFind === middle) {
                return curFind.next
            }
            curFind = curFind.next
        }
        return head.next
    }
}
