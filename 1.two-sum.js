/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};
  for (var i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (hash[difference] !== undefined) {
      return [hash[difference], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};
// @lc code=end

var input = [2,7,11,15];
var result = twoSum(input, 9);
console.log(result);