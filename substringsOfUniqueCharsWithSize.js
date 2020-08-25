// Given a string s and an int k, return all unique substrings of s of size k with k distinct characters.

// Input: s = "abcabc", k = 3
// Output: ["abc", "bca", "cab"]

// Input: s = "abacab", k = 3
// Output: ["bac", "cab"]

/**
 * @param {string} str
 * @param {number} k
 */

var findSubstrings = function (str, k) {
  var results = [];
  var substrings = {};

  if (str.length < k) { return results}

  for (var i = 0; i <= str.length - k; i++) {
    var sum = i + k;
    var charsUsed = {};
    var flag = true;
    var window = [];
    for (var j = i; j < sum; j++) {

      if (!charsUsed[str[j]]) {
        window.push(str[j]);
        charsUsed[str[j]] = true;
      } else {
        flag = false;
        break;
      }
    }
    var substring = window.join('');
    if (flag && !substrings[substring]) {
      results.push(substring);
      substrings[substring] = true;
    }
  }
  return results;
}

var result = findSubstrings("abacab", 3);
console.log(result);
result = findSubstrings("abcabc", 3);
console.log(result);
result = findSubstrings("awaglknagawunagwkwagl", 4);
console.log(result);
