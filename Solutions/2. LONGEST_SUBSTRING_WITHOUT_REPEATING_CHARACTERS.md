#### Try it on [LEETCODE](https://leetcode.com/problems/longest-substring-without-repeating-characters)

# Challenge
Given a string **_s_**, find the length of the longest **_substring_** without repeating characters.

Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```
Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```
Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

Constraints:

- 0 <= s.length <= 5 * 104
- **_s_** consists of English letters, digits, symbols and spaces.

# Evaluation
### Inputs

We are given a single input, a string.<br>

### Constraints

We know the string length will be between 0 and 5*104 (520) characters long.<br>
We know the string consists of english letters, digits, symbols and spaces<br>

### Initial Thoughts

We need to itterate through the characters in the string.<br>
We should add the current character to a set (memory) for memoization.<br>
We should check the memory to see if the current character exists in the map.<br>
While an entry exists in the map that matches the current character, we should remove it from the map.<br>
We should also have a counter to keep track removals.<br>
We should store the maximum size we have encountered.<br>

# Approach
Implement **Window Sliding Technique**.

We setup a memory as a set.<br>
we setup a removals variable.<br>
We setup a largestSubstringLength variable.<br>

We handle the case of an empty string being passed in.<br>
We handle the case of a single character being passed in.<br>

We then loop through the characters of the string.<br>
For each character, we check if it is already in memory.<br>
If it exists in memory, we remove it from memory and update
removals for each time it is in memory.<br>
Next, we add the current character to memory<br>
We finally update the largestSubstringLength variable with
either itself, or the current index minus removals plus one
to account for the index offset; whichever is greater.<br>
We itterate.

Once all iterations are complete, we return largestSubstringLength.

# Complexity

|        |               |
| ------ | ------------- |
| Time:  | $$O(n)$$      |
| Space: | $$O(n)$$      |

# Code

### Javascript:
```js
/**
 * Find the longest substring without repeating characters.
 * Runs at o(n)
 * @param {string} stringToCheck
 * @return {number}
 */
var lengthOfLongestSubstring = function(stringToCheck) {
    let memory = new Set();
    let removals = 0;
    let largestSubstringLength = 0;

    if (stringToCheck.length === 0) return 0;
    if (stringToCheck.length === 1) return 1;

    for (let index = 0; index < stringToCheck.length; index++) {
        while (memory.has(stringToCheck[index])) {
            memory.delete(stringToCheck[removals])
            removals++;
        }
        memory.add(stringToCheck[index]);
        largestSubstringLength = Math.max(largestSubstringLength, index - removals + 1)
    }
    return largestSubstringLength;
};
```