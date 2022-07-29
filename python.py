# "Given a binary array called nums, return the maximum number of consecutive 1's in the array.
# Input: nums = [1,1,0,1,1,1]
# Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

# Example 2:
# Input: nums = [1,0,1,1,0,1]
# Output: 2"

def max(arr):
    max = 0
    count = 0
    for i in arr:
        print(f'i: {i}')
        if i == 1:
            count += 1
        else:
            print(f'i at else: {i}')
            if max < count:
                max = count
                count = 0
            else:
                count = 0
    if max < count:
        max = count
    return max

print(max([1,0,1,1,0,1]))