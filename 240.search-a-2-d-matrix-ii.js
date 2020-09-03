/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rowLength = matrix[0].length;
  const colLength = matrix.length;

  // If target is larger than the biggest element, return false immediately
  if (matrix[colLength][rowLength] > target) return false;


};
// @lc code=end

