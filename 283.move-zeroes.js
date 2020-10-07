/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // O: nothing
  // I: array of numbers (integers)
  // C; none
  // E: Empty array, do nothing
  //    Array with no 0s, do nothing

  if (nums.length === 0) {
    return;
  }

  let temp = [];

  // Find all non 0 integers
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp.push(nums[i]);
    }
  }

  let tempIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tempIndex >= temp.length) {
      nums[i] = 0;
    } else {
      nums[i] = temp[tempIndex];
      tempIndex++;
    }
  }
}
// @lc code=end
// let nums = [0,1,0,3,12];
// moveZeroes(nums);
// console.log(nums);

nums = [0,1,0,3,12,0,0];
moveZeroes(nums);
console.log(nums);