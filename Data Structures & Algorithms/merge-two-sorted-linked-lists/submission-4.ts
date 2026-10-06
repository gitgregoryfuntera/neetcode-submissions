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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let dummy  = { val: 0, next: null}
        let curr = dummy
        let tempCurL1 = list1
        let tempCurL2 = list2
        while (tempCurL1 && tempCurL2) {
            const val1 = tempCurL1?.val
            const val2 = tempCurL2?.val
            if (val1 < val2) {
                curr.next = tempCurL1
                tempCurL1 = tempCurL1?.next
            } else {
                curr.next = tempCurL2
                tempCurL2 = tempCurL2?.next
            }
            curr = curr?.next
        }

        if (tempCurL1) {
            curr.next = tempCurL1
        } else {
            curr.next = tempCurL2
        }


        return dummy.next
        
    }
    
}
