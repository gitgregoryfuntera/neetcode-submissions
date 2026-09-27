class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        mapper = {}
        for str in strs:
            sorted_str = "".join(sorted(str))
            if (sorted_str not in mapper):
                mapper[sorted_str] = [str]
            else:
                mapper[sorted_str].append(str)
        return list(mapper.values())
        
        