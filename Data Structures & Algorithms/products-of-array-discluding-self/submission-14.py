class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix_arr = [1]
        for i in range(len(nums)):
            product = prefix_arr[i] * nums[i]
            if (len(prefix_arr) < len(nums)):
                index = i + 1
                prefix_arr.insert(index, product)
        
        suffix_arr = [0] * (len(nums) - 1)
        last_index = len(nums) - 1
        print(last_index)
        suffix_arr.insert(last_index, 1)
        for i in reversed(range(len(nums))):
            product = suffix_arr[i] * nums[i]
            index = i - 1
            if (index >= 0):
                suffix_arr[index] = product

        output = []
        for i in range(len(nums)):
            product = prefix_arr[i] * suffix_arr[i]
            output.insert(i, product)
        return output

        