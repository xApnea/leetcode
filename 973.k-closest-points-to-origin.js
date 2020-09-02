/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */
// var Heap = function(val) {
//   this.val = val ? val : null;
//   this.children = [];
// }

// Heap.prototype.add = function(val) {

// }

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
  var distances = [];
  if (points.length < 1) return [];
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][1];
    var distance = Math.sqrt((x * x) + (y * y));
    distances.push([points[i], distance]);
  }
  distances.sort((a, b) => {
    return a[1] - b[1];
  })

  var results = [];
  for (var j = 0; j < K; j++) {
    results.push(distances[j][0]);
  }
  return results;

};
// @lc code=end
// var points = [[1,3],[-2,2]];
// var results = kClosest(points, 1);
// console.log(results);

// points = [[3,3],[5,-1],[-2,4]]
// results = kClosest(points, 2);
// console.log(results);
