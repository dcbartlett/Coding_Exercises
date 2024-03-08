/**
 * Find the longest substring without repeating characters.
 * Runs at o(n)
 * @param {string} stringToCheck
 * @return {number}
 */
var lengthOfLongestSubstring = function(stringToCheck) {
    let previousIncludedCharacters = [];
    let includedCharacters = [];

    if (stringToCheck.length === 0) return 0;
    if (stringToCheck.length === 1) return 1;

    stringToCheck.split('').forEach((character) => {
        if (includedCharacters.includes(character)) {
            if (previousIncludedCharacters.length <= includedCharacters.length) {
                previousIncludedCharacters = includedCharacters;
                includedCharacters = [];
            }
        }
        includedCharacters.push(character);
    });
    return previousIncludedCharacters.length;
};