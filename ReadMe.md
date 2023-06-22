# Problem 01: Two Sum Unique Pairs

Given an array of integers `nums` and an integer `target`, return all unique pairs of indices where the numbers at those indices add up to `target`.

You may assume that each input would have at least one solution, but there could be multiple valid pairs. Also, you may not use the same element twice. 

Return the answer as an array of pairs, where each pair is also an array.

#### Example 1:

Input: nums = [2,7,11,15], target = 9

Output: [[0,1]]

Explanation: Because nums[0] + nums[1] == 9, we return [[0, 1]].

{Try It!}(node .guides/01/try-it-01.js)

#### Example 2:

```
Input: nums = [3,2,4,3], target = 6

Output: [[0,3], [1,2]]

Explanation: Both pairs [0,3] and [1,2] are valid since nums[0] + nums[3] == 6 and nums[1] + nums[2] == 6.
```

{Try It!}(node .guides/01/try-it-02.js)

#### Example 3:

Input: nums = [3,3,3,3], target = 6

Output: [[0,1]]

Explanation: Despite there being multiple 3's in the array, we can only form a unique pair [0,1], as we can't use the same element twice.

{Try It!}(node .guides/01/try-it-03.js)

## Submit

node .guides/secure/01-testRunner.js


2,7,11,15 9 :: [[0,1]]
4,4,4,4 8  :: [[0,1]]
1,2,3,4,5 6 :: [[0,4],[1,3]]
-1,-2,-3,-4,-5 -7  :: [[1,4],[2,3]]
-3,4,3,90 0  :: [[0,2]]
10,20,30,40 100  :: []
0,1,2,0 0 :: [[0,3]]

# Problem 02: Best Time to Buy and Sell Stock III

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing **at most two non-overlapping intervals** to buy one stock and sell that stock. 

That is, you must sell the stock before you can buy again.

Return the maximum profit you can achieve from these transactions. If you cannot achieve any profit, return 0.

### Example 1:

Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3. Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 3.

{Try It!}(node .guides/02/try-it-01.js)

### Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 4. We could not make any other transactions because they would be less profitable.

{Try It!}(node .guides/02/try-it-02.js)

### Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

{Try It!}(node .guides/02/try-it-03.js)

## Submit

node .guides/secure/02-testRunner.js

2,1,2,0,1  Output: 2
3,3,5,0,0,3,1,4 Output: 6
1,2,3,4,5 Output: 4
7,6,4,3,1 Output: 0
3,2,6,5,0,3 Output: 7

# Problem: Contains Duplicate Within K Distance

Given an integer array `nums` and an integer `k`, return true if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`. Return false otherwise.

**Example 1:**

Input: nums = [1,2,3,1], k = 3
Output: true
Explanation: The array has duplicate '1' and the distance between the two '1's is 3 which is not more than k.

{Try It!}(node .guides/03/try-it-01.js)

**Example 2:**

Input: nums = [1,2,3,4], k = 2
Output: false
Explanation: The array has no duplicate numbers.

{Try It!}(node .guides/03/try-it-02.js)

**Example 3:**

Input: nums = [1,2,3,1], k = 2
Output: false
Explanation: The array has duplicate '1' but the distance between the two '1's is 3 which is more than k.

{Try It!}(node .guides/03/try-it-03.js)

## Submit

node .guides/secure/03-testRunner.js

1,2,1,2,1,2,1 1 :: Output: false
7,8,9,10,11,12 2 :: Output: false
3,4,3,2,1,3,5 3 :: Output: true
1 1 :: Output: `false`
1,2 1 :: Output: `false`
2,2 1 :: Output: `true`
