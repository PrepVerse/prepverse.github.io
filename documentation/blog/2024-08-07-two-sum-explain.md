---
title: Two Sum Explained
description: DSA problem two sum explained
slug: two-sum
authors: AkashSingh3031
tags: [Array, LeetCode]
is_featured: false
image: https://miro.medium.com/v2/resize:fit:1400/1*2x-CAwfeui5YM4148VxgRA.jpeg
hide_table_of_contents: false
---

## PrepVerse | Three Approaches to Solving the Two Sum Problem

### Approach 1: Brute Force

**Algorithm:**

The brute force approach is straightforward. Loop through each element `x` in the array and check if there is another element that equals `target - x`.

**Implementation:**

<Tabs smallTabs>
<TabItem value="py" label="Python">

```python title="Brute Force"
def two_sum_brute_force(nums, target):
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return None
```

</TabItem>
</Tabs>

**Complexity Analysis:**

- **Time Complexity:** O(n²)
  - For each element, we loop through the rest of the array to find its complement, resulting in O(n) operations per element. Hence, the overall time complexity is O(n²).
- **Space Complexity:** O(1)
  - The space required does not depend on the size of the input array, so only constant space is used.

### Approach 2: Two-pass Hash Table

**Intuition:**

To improve our runtime complexity, we need a more efficient way to check if the complement exists in the array. A hash table is well-suited for this purpose because it supports fast lookups in near constant time. By trading space for speed, we can reduce the lookup time from O(n) to O(1).

**Algorithm:**

1. In the first iteration, add each element's value as a key and its index as a value to the hash table.
2. In the second iteration, check if each element's complement (target - nums[i]) exists in the hash table. If it does, return the current element's index and its complement's index.

**Implementation:**

<Tabs smallTabs>
<TabItem value="py" label="Python">

```python title="Two-pass Hash Table"
def two_sum_two_pass_hash_table(nums, target):
    hash_table = {}
    for i, num in enumerate(nums):
        hash_table[num] = i
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_table and hash_table[complement] != i:
            return [i, hash_table[complement]]
    return None
```

</TabItem>
</Tabs>

**Complexity Analysis:**

- **Time Complexity:** O(n)
  - We traverse the list containing `n` elements exactly twice. Since the hash table reduces the lookup time to O(1), the overall time complexity is O(n).
- **Space Complexity:** O(n)
  - The extra space required depends on the number of items stored in the hash table, which stores exactly `n` elements.

### Approach 3: One-pass Hash Table

**Algorithm:**

We can optimize further by performing the lookup and insertion in a single pass. While iterating through the array, we check if the current element's complement already exists in the hash table. If it does, we have found a solution and return the indices immediately.

**Implementation:**

<Tabs smallTabs>
<TabItem value="py" label="Python">

```python title="One-pass Hash Table"
def two_sum_one_pass_hash_table(nums, target):
    hash_table = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_table:
            return [hash_table[complement], i]
        hash_table[num] = i
    return None
```

</TabItem>
</Tabs>

**Complexity Analysis:**

- **Time Complexity:** O(n)
  - We traverse the list containing `n` elements only once. Each lookup in the table costs only O(1) time.
- **Space Complexity:** O(n)
  - The extra space required depends on the number of items stored in the hash table, which stores at most `n` elements.

### Conclusion

In summary, the brute force approach is simple but inefficient, with a time complexity of O(n²). The two-pass hash table approach improves the time complexity to O(n) by utilizing extra space for a hash table. The one-pass hash table approach further optimizes the solution by combining lookup and insertion into a single pass, maintaining an overall time complexity of O(n) and space complexity of O(n). Depending on the constraints and requirements of your problem, choosing the right approach can significantly improve performance.