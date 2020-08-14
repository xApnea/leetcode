/**
 * @param {number} n
 * @return {number}
 * 1 <= n <= 45
 */

var climbStairs = function(n) {
  var counter = 0;
  var totalSteps = n;

  var countSolutions = function(steps) {
    if (steps === 0) {
      counter++;
    } else if (steps < 0) {
      return;
    } else {
      countSolutions(steps - 1);
      countSolutions(steps - 2);
    }
  }

  countSolutions(totalSteps);
  return counter;
};

var result;
result = climbStairs(2);
console.assert(result === 2, 'Should return 2 for 2 total steps.');
result = climbStairs(3);
console.assert(result === 3, 'Should return 3 for 3 total steps.');
console.log(climbStairs(45));