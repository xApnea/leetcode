/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  var result;
  var memo = [0, 1, 1];

  var findfib = function(n) {
    if (memo[n] !== undefined) {
      return memo[n];
    }
    if (n === 1 || n === 2) {
      return 1;
    } else {
      var first = findfib(n - 1);
      var second = findfib(n - 2)
      result =  first + second;
      memo[n] = result;
    }
    return result;
  }

  result = findfib(N);
  return result;
};

console.log(fib(5));