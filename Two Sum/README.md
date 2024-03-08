<div style="position: relative;">
    <span style="display: inline-block;width: calc(100% - 283px);
    word-wrap:break-word;"><h1>Two Sum</h1></span>
    <span style="position: absolute;right:0;bottom:0;"><h1>&nbsp;&nbsp;&nbsp;&nbsp;Try it on <a href="https://leetcode.com/problems/two-sum" target="_blank">LEETCODE</a></h1></span>
</div>

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```
Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```
Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

Constraints:

- 2 <= nums.length <= 104
- -109 <= nums[i] <= 109
- -109 <= target <= 109
- Only one valid answer exists.


## Lets Break It Down

### Inputs

We are given two inputs, an array of integers, and a target integer.<br>
We can infer from the inputs that we will have to loop through the array of integers.<br>
From the instructions, we know that we must select 2 of the integers that will add up to the target.<br>
We can't use the same integer twice (the index in the array.)

### Constraints

We know there will be only 1 valid answer.<br>
We know that the input array will have between 2 and 104 items.<br>
We know that both any given integer and the target will be between `-109` and `109`.<br>

### How do we tackle this

We can accomplish this by looping through the integer array we were given.<br>
If we loop though this once, we will get one of the addends.

Now, we have a choice of how we can get the second addend.

We can cycle through the array a second time, compare the two addends, and return if they add up to the target.

Alternatively, we can use memoization to store previously checked addends and see if any of them are the difference of the current addened and the target.  If they are, we return both addends as the solution.

