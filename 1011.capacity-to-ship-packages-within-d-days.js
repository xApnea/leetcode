/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    // find max weight within weights
    var capacity = 0;
    // Find the largest weight to start with
    // Any ship with a capacity lower than heaviest weight is not an option.
    for (weight of weights) {
      if (weight > capacity) {
        capacity = weight;
      }
    }

    var foundMin = false;
    var days = [0];
    var dayIndex = 0;
    // iterate through weights
    while (!foundMin) {
      for (var i = 0; i < weights.length; i++) {
        days[dayIndex] += weights[i];
        if (days[dayIndex] > capacity) {
          days[dayIndex] -= weights[i];
          days.push(0);
          dayIndex++;
          i--;
          continue;
        }
      }
      if (weights[i] || dayIndex > D - 1) {
        days = [0];
        dayIndex = 0;
        capacity++;
      } else {
        foundMin = true;
      }
    }
  return capacity;
};
// @lc code=end

let weights = [1,2,3,4,5,6,7,8,9,10];
let result = shipWithinDays(weights, 5);
console.log(result); // Should be 15

weights = [100];
result = shipWithinDays(weights, 1);
console.log(result); // Should be 100

weights = [1,2,3,1,1];
result = shipWithinDays(weights, 4);
console.log(result); // Should be 100

