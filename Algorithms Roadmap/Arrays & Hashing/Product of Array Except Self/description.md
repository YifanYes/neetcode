# Product of Array Except Self

Given an integer array `nums`, return an _array_ `answer` such that `answer[i]` is equal to the _product of all the elements_ of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is _guaranteed_ to fit in a _32-bit_ integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

Example 1:

Input: `nums = [1,2,3,4]` Output: `[24,12,8,6]`

Example 2:

Input: nums = `[-1,1,0,-3,3]` Output: `[0,0,9,0,0]`

Constraints:

- `2 <= nums.length <= 105`
- `-30 <= nums[i] <= 30`
- The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
