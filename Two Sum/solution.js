/**
 * Finds the addends that make up the target
 * Runs at o(n^2)
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