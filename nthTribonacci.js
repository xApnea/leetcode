/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if (n === 0) { return 0 }
  else if (n === 1 || n == 2) { return 1};

  var sequence = [0, 1, 1];

  for (var i = 3; i <= n + 1; i++) {
    if (i === n + 1) {
      return sequence[n];
    } else {
      const value = sequence[i - 3] + sequence[i - 2] + sequence[i - 1];
      sequence.push(value);
    }
  }
};

var result;
result = tribonacci(0);
console.assert(result === 0, 'An n of 0 should yield 0');
result = tribonacci(2);
console.assert(result === 1, 'An n of 2 should yield 1');
result = tribonacci(4);
console.assert(result === 4, `An n of 4 should yield 4, received ${result}`);
result = tribonacci(25);
console.assert(result === 1389537, `An n of 25 should yield 1389537, received ${result}`);