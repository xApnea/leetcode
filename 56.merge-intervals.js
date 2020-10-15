/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0];
    }
  });

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] >= intervals[i+1][0]) {
      if (intervals[i][1] < intervals[i+1][1]) {
        intervals[i][1] = intervals[i+1][1];
      }
      intervals.splice(i + 1, 1);
      i--;
    }
  }

  return intervals;
};
// @lc code=end

let array = [[1,5],[1,3],[2,6],[8,10],[15,18]];
console.log(merge(array));

array = [[1,4],[4,5]];
console.log(merge(array));

array = [[1,4],[2,3]];
console.log(merge(array));