<div style="position: relative;">
    <span style="display: inline-block;width: calc(100% - 283px);
    word-wrap:break-word;"><h1>Longest Substring Without Repeating Characters</h1></span>
    <span style="display: inline-block;position: absolute;right:0;bottom:0;"><h1>&nbsp;&nbsp;&nbsp;&nbsp;Try it on <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters" target="_blank">LEETCODE</a></h1></span>
</div>

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

## Lets Break It Down

### Inputs

We are given a single input, a string.<br>

### Constraints

We know the string length will be between 0 and 5*104 (520) characters long.<br>
We know the string consists of english letters, digits, symbols and spaces<br>

### How do we tackle this

