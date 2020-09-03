/*
 * @lc app=leetcode id=973 lang=javascript
 *
 * [973] K Closest Points to Origin
 */
// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var Heap = function(node, limit) {
  this.heap = node ? [node] : [];
  this.limit = limit;
}

Heap.prototype.add = function(node) {
  // Inserting the new node at the end of the heap array
  this.heap.push(node)

  if (this.heap.length > 1) {
    let current = this.heap.length - 1

    // HeapifyUp until the new value is less than it's parent
    while (current >= 1 && this.heap[Math.floor(current / 2)][1] < this.heap[current][1]) {
      let parent = Math.floor(current / 2)
      let temp = this.heap[parent];
      this.heap[parent] = this.heap[current];
      this.heap[current] = temp;
      current = parent;
    }
  }

  if (this.heap.length > this.limit) {
    this.heap.shift();
  }
}
var kClosest = function(points, K) {
  var distances = new Heap(null, K);
  if (points.length < 1) return [];
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0];
    var y = points[i][1];
    var distance = Math.sqrt((x * x) + (y * y));
    distances.add([points[i], distance]);
  }

  // for (var j = 0; j < distances.heap.length; j++) {
  //   distances.heap[j] = distances.heap[j][0];
  // }
  return distances.heap;

};
// @lc code=end
var points;
var results;

// points = [[1,3],[-2,2]];
// results = kClosest(points, 1);
// console.log(results);

// points = [[3,3],[5,-1],[-2,4]]
// results = kClosest(points, 2);
// console.log(results);

// points = [[6,10],[-3,3],[-2,5],[0,2]]
// results = kClosest(points, 3);
// console.log(results);

// points = [[8,8],[-5,5],[5,4],[-10,2],[1,8],[5,9],[-2,-3]]
// results = kClosest(points, 6);
// console.log(results);

// points = [[-2,10],[-4,-8],[10,7],[-4,-7]]
// results = kClosest(points, 3);
// console.log(results);

points = [[-63,-55],[-20,17],[-88,-82],[-90,-95],[-88,18],[-62,-21],[71,-64],[-14,56],[65,90],[-48,-52],[59,92],[-44,-59],[-3,-66]];
results = kClosest(points, 7);
console.log(results);

