/**
 * @param {number} n
 * @return {number}
 * 1 <= n <= 45
 */

var climbStairs = function(n) {
  var memo = [0, 1, 2];
  for (var i = 3; i < n + 1; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

var result;
result = climbStairs(2);
console.assert(result === 2, 'Should return 2 for 2 total steps.');
result = climbStairs(3);
console.assert(result === 3, 'Should return 3 for 3 total steps.');
result = climbStairs(45)
console.log(result);
console.assert(result === 1836311903, 'Failed for max number');