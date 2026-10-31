class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        mapper = {}
        for index, item in enumerate(nums):
            mapper[item] = index
        
        for index, item in enumerate(nums):
            key = target - item
            if key in mapper:
                mapper_val = mapper[key]
                if mapper_val != index:
                    return [index, mapper_val]

        return []
        