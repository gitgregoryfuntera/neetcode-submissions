class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        mapper = set(nums)
        longest = 0
        for item in nums:
            target = item - 1
            if (target not in mapper):
                curr_counter = 0
                temp_item = item
                is_running = True
                while(is_running):
                    if (temp_item in mapper):
                        curr_counter += 1
                    else:
                        longest = max(curr_counter, longest)
                        is_running = False
                    temp_item += 1
                    

        return longest
        