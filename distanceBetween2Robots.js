/**
 * @return {number} numRobots
 * @param {number[]} positionX
 * @param {number[]} positionY
 */

// Find shortest squared distance between num of robots
// compare the squared distances, find the minimum distance

// Input:
// numRobots = 3
// positionX = [0, 1, 2]
// position Y = [0, 1, 4]
// Robots have positions of (0,0), (1,1), (2,4)

// Output:
// shortest squared distance: (X2 - X1)^2 + (Y2-Y1)^2
// shortest distance is (1 - 0)^2 + (1-0)^2 = 2

var shortestDistance = function(numRobots, positionX, positionY) {
  var min = Infinity;
  for (var i = 0; i < numRobots; i++) {
    for (var j = 0; j < numRobots; j++) {
      if (i === j) {break};

      const x = positionX[i] - positionX[j]
      const y = positionY[i] - positionY[j]
      const squaredDistance = (x * x) + (y * y);
      if (squaredDistance < min) {
        min = squaredDistance;
      }
    }
  }
  return min;
}

var result = shortestDistance(3, [0, 1, 2], [0, 1, 4]);
console.log(result);
console.assert(result === 2, 'Expected squared distance of 2');
