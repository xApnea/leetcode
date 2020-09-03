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
  if (!matrix[0]) return false;

  const rowLength = matrix[0].length;
  const colLength = matrix.length;

  // If target is larger than the biggest element, return false immediately
  if (matrix[colLength - 1][rowLength - 1] < target) return false;

  for (var i = 0; i < colLength; i++) {
    for (var j = 0; j < rowLength; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5);