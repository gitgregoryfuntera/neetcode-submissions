class Solution:
    def maxArea(self, heights: List[int]) -> int:
        max_output = 0
        left_pointer = 0
        right_pointer = len(heights) - 1
        while(left_pointer < right_pointer):
            left_height = heights[left_pointer]
            right_height = heights[right_pointer]
            min_height = min(left_height, right_height)
            width = right_pointer - left_pointer
            output = width * min_height
            max_output = max(output, max_output)
            if (left_height < right_height):
                left_pointer += 1
            elif (left_height > right_height):
                right_pointer -= 1
            else:
                left_pointer += 1
        return max_output
        