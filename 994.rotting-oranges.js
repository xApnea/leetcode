/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  var queue = [];
  var freshOrangeCount = 0;
  // Create a queue of all Rotten Oranges, and count all the fresh ones
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      // Only add Rotten Oranges to the queue
      if (grid[i][j] === 2) {
        var cell = {
          x: i,
          y: j
        }
        queue.push(cell);
      }
      if (grid[i][j] === 1) {
        freshOrangeCount++;
      }
    }
  }
  // If there are no fresh oranges, while loop won't execute
  // Function will simply return 0 in this case
  var minutes = 0;

  while (freshOrangeCount > 0) {
    var newQueue = [];

    // While we still have rotten oranges, dequeue and rot
    while (queue.length > 0) {
        var x = queue[0].x;
        var y = queue[0].y;
        // rot every orange N, E, S, W
        // Rot North
        if (x - 1 >= 0 && grid[x - 1][y] === 1) {
          grid[x - 1][y] = 2;
          freshOrangeCount--;
          var cell = {
            x: x - 1,
            y: y
          }
          newQueue.push(cell)
        }
        // Rot South
        if (x + 1 < grid.length && grid[x + 1][y] === 1) {
          grid[x + 1][y] = 2;
          freshOrangeCount--;
          var cell = {
            x: x + 1,
            y: y
          }
          newQueue.push(cell)
        }
        // Rot West
        if (y - 1 >= 0 && grid[x][y - 1] === 1) {
          grid[x][y - 1] = 2;
          freshOrangeCount--;
          var cell = {
            x: x,
            y: y - 1
          }
          newQueue.push(cell)
        }
        // Rot East
        if (y + 1 < grid[0].length && grid[x][y + 1] === 1) {
          grid[x][y + 1] = 2;
          freshOrangeCount--;
          var cell = {
            x: x,
            y: y + 1
          }
          newQueue.push(cell)
        }
      queue.shift();
    }
    minutes++;
    queue = newQueue;

    // If there aren't any oranges that can still rot
    // but there are still fresh ones, break and return -1.
    if (queue.length === 0 && freshOrangeCount > 0) {
      minutes = -1;
      break;
    }
  }

  return minutes
};

var result = orangesRotting([[2,1,1],[1,1,0],[0,1,1]]);
console.assert(result === 4, `Expected 4, received ${result}`);

result = orangesRotting([[0,2]]);
console.assert(result === 0, `Expected 0, received ${result}`);

// [[2,1,1],
//  [1,1,0],
//  [0,1,1]]




// @lc code=end

