class Solution:
    def isPalindrome(self, s: str) -> bool:
        clean_string = "".join(char for char in s.lower() if char.isalnum())
        left_pointer = 0
        right_pointer = len(clean_string) - 1
        while(left_pointer < right_pointer):
            left_item = clean_string[left_pointer]
            right_item = clean_string[right_pointer]
            if (left_item != right_item):
                return False
            left_pointer = left_pointer + 1
            right_pointer = right_pointer - 1

        return True

        