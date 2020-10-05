/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => {
      return a - b;
    })

    if (nums[0] !== 0) {
      return 0;
    }

    if (nums[nums.length - 1] !== nums.length) {
      return nums.length;
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + 1 !== nums[i + 1]) {
        return nums[i] + 1;
      }
    }
};
// @lc code=end

let result = missingNumber([4,0,3,1,5,2,6]);
console.log(result);