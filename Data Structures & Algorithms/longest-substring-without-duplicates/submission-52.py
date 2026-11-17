class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 1:
            return 1
        
        if (len(s) == 0):
            return 0
        
        right_pointer = 1
        max_output = 0
        mapper = []
        mapper.append(s[0])

        while right_pointer < len(s):
            right_item = s[right_pointer]
            if right_item not in mapper:
                mapper.append(right_item)
            elif right_item in mapper:
                temp_mapper = mapper
                while temp_mapper and (item := temp_mapper.pop(0)) != right_item:
                    print(item)
                mapper = temp_mapper
                mapper.append(right_item)
            max_output = max(max_output, len(mapper))
            right_pointer += 1


            
        return max_output