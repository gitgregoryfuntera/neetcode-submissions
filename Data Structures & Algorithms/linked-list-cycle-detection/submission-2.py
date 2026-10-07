# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        cur = head
        hashmap = set()
        while (cur):
            if cur in hashmap:
                return True
            else:
                hashmap.add(cur)
            cur = cur.next
        return False

        