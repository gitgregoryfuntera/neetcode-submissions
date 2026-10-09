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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let dummy = {val: 0, next: null };
    dummy.next = head;
    let behind = dummy, ahead = dummy;

    for (let i = 0; i <= n; i++) {
        ahead = ahead.next;
    }

    while (ahead) {
        behind = behind.next;
        ahead = ahead.next;
    }

    behind.next = behind.next.next;

    return dummy.next;
    }
}
