# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        iterator = head
        iteratorCount = 0
        while(iterator):
            iteratorCount = iteratorCount + 1
            iterator = iterator.next
        
        if (iteratorCount <= 1):
            return head
        
        find = head
        middle = iteratorCount // 2
        findIterator = 0
        while(find):
            findIterator = findIterator + 1
            if (middle == findIterator):
                return find.next
            find = find.next
        return find
        