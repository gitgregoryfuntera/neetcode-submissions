class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        output = 0

        for index, item in enumerate(prices):
            pointer = len(prices) - 1
            while (pointer > index):
                pointer_val = prices[pointer]
                temp_output = pointer_val - item
                output = max(temp_output, output)
                pointer -= 1
        
        return output
        