class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        mapper = {}
        for item in nums:
            if (item in mapper):
                current_count = mapper[item]
                mapper[item] = current_count + 1
            else:
                mapper[item] = 1
        sorted_dict = dict(sorted(mapper.items(), key=lambda item: item[1], reverse=True))
        sorted_keys = list(sorted_dict.keys())
        
        return sorted_keys[:k]