/**
 * Runs at o(n^2).
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let x = 0; x < nums.length; x++) {
        for (let y = 0; y < nums.length; y++) {
            if (x !== y && target === (nums[x] + nums[y])) {
                return [x, y];
            }
        }
    }
};

/**
 * Runs at o(n).
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let memory = new Map();

    for (let i=0; i<nums.length; i++) {
        let difference = target - nums[i];

        if (memory.has(difference)) {
            return [i,memory.get(difference)];
        }

        memory.set(nums[i], i);
    }
};