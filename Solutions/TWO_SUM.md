#### Try it on [LEETCODE](https://leetcode.com/problems/two-sum)

# Challenge
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

# Evaluation
### Inputs

We are given a single input, a string.<br>

### Constraints

We know the string length will be between 0 and 5*104 (520) characters long.<br>
We know the string consists of english letters, digits, symbols and spaces

### Initial Thoughts

We can iterate the input to solve for the target.

# Approach
We can accomplish this by looping through the integer array we were given.<br>
If we loop though this once, we will get one of the addends each iteration.

We setup a map to be used as memory outside of the loop.  This will allow us to keep track of tested addends.

During each iteration, we check if the difference of the target and the current addend is in the memory.

If the difference exists, we return both addends as the solution.

If the difference does not exist, we add the addend to memory and iterate.


# Complexity

|        |               |
| ------ | ------------- |
| Time:  | $$O(n)$$      |
| Space: | $$O(n)$$      |

# Code

### Javascript:
```js
/**
 * Finds the addends that make up the target
 * Runs at o(n)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let memory = new Map();

    for (let i=0; i<numbers.length; i++) {
        let difference = target - numbers[i];

        if (memory.has(difference)) {
            return [i,memory.get(difference)];
        }

        memory.set(numbers[i], i);
    }
};
```

### Javascript:
```js
/**
 * Finds the addends that make up the target
 * Runs at o(n²)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    for (let x = 0; x < numbers.length; x++) {
        for (let y = 0; y < numbers.length; y++) {
            if (x !== y && target === (numbers[x] + numbers[y])) {
                return [x, y];
            }
        }
    }
};
```