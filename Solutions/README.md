#### Try it on [LEETCODE](https://leetcode.com/problems/)

# Challenge
Given a string **_s_**, output the same string.

Example 1:
```
Input: 'french fries'
Output: 'french fries'
```
Example 2:
```
Input: 'test'
Output: 'test'
```

Constraints:

- string can be empty

# Evaluation
### Inputs

We are given a single input, a string.<br>

### Constraints

We know that a string is passed in.<br>
We know that the string can be empty.

### Initial Thoughts

Just give back what the user puts in.

# Approach
We store the input into a variable called output.
We return output.


# Complexity

|        |               |
| ------ | ------------- |
| Time:  | $$O(1)$$      |
| Space: | $$O(1)$$      |

# Code

### Javascript:
```js
/**
 * Echos out what you put in.
 * Runs at o(1)
 * @param {string} input
 * @return {string}
 */
var example = function (input) {
    var output = input;
    return output
};
```