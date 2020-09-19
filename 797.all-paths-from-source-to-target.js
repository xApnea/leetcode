/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  // graph[i] is a node
  // graph[i][j] is a collection of edges
  var end = graph.length - 1;
  var result = [];
  var path = [];
  var recursiveSearch = function(node) {
    if (node === end) {
      path.push(node);
      let newPath = [...path];
      result.push(newPath);
      path.pop();
      path.pop();
      return;
    } else {
      path.push(node);
      for (var i = 0; i < graph[node].length; i++) {
        recursiveSearch(graph[node][i]);
      }
      return;
    }
  }

  recursiveSearch(0);
  return result;
};
// @lc code=end

var graph = [[1,2],[3],[3],[]];
var result = allPathsSourceTarget(graph);
console.log(result);


graph = [[4,3,1],[3,2,4],[3],[4],[]];
result = allPathsSourceTarget(graph);
console.log(result);