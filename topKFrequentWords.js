// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.

// O: Array of K most frequent words
// I: Array of words
// C: Try to solve in O(n log k) time with O(n) space
// E: Strings will all be lowercase,

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {

};

var input = ["i", "love", "leetcode", "i", "love", "coding"];
var result = topKFrequent(input, 2);
console.log(result);

input = ["i", "love", "leetcode", "i", "love", "coding"]
result = topKFrequent(input, 3);
console.log(result);
