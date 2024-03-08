/**
 * Find the longest substring without repeating characters
 * Runs at o(n)
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(stringToCheck) {
    let currentIncludedCharacters = [];
    let previousIncludedCharacters = [];
    stringToCheck.split('').forEach((character) => {
        if (currentIncludedCharacters.includes(character)) {
            if (previousIncludedCharacters.length <= currentIncludedCharacters.length) {
                previousIncludedCharacters = currentIncludedCharacters;
                currentIncludedCharacters = [];
            }
        }
        currentIncludedCharacters.push(character);
    });
    return previousIncludedCharacters.length;
};