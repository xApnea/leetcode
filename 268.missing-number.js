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
  let numsHash = {};
  nums.forEach((num) => {
    numsHash[num] = true;
  })

  if (!numsHash[0]) {
    return 0;
  }

  if (!numsHash[nums.length]) {
    return nums.length;
  }

  for (num in numsHash) {
    num = parseInt(num);
    if (!numsHash[num + 1]) {
      return parseInt(num) + 1;
    }
  }
};
// @lc code=end

let result = missingNumber([4,5,3,1,0,2,6]);
// console.log(result);

result = missingNumber([3,0,1]);
console.log(result);