// Inputs:
// num of customers
// array of times that each customer arrived at
//  The above arrays are ordered by time arrival
// array of directions: 1 = wants to exit, 0 = wants to enter

// Output:
// array of the times that each customer at index i passed through the turnstile

// constraints:
// 1 <= numOfCustomers <= 10^5
// times are in ascending order from 0 to 10^9 secs
// direction will only be 0 or 1

/**
 * @return {number} numOfCustomers
 * @param {number[]} times
 * @param {number[]} directions
 *
 */

 var amazonTurnstile = function(numOfCustomers, times, directions) {
   var results = [];
   var currentTime = 0;
   var lastMoveDirection = null; // 0 (enter) or 1 (exit) or null (not used in last second)
   // need to keep track of customer that got skipped whenever a decision based on the rules is made
   var skippedCustomerIndex;
   // also need to keep track of lastMoveDirection when times have more than one second gaps vs consecutive moves

   for (var i = 0; i < times.length; i++) {
    if (currentTime !== times[i]) {
      lastMoveDirection = null;
      currentTime =
    }

     if (times[i] === times[i + 1]) {
       var customer0Direction = directions[i];
       var customer1Direction = directions[i + 1];
      if ((lastMoveDirection === null || lastMoveDirection === 1)) {
        //whichever one is an exit goes
        if (customer0Direction === 1) {
          results.push = (currentTime);
          currentTime++;
          lastMoveDirection = 1;
        } else if (customer1Direction === 1) {
          results[i+ 1] = (currentTime);
          currentTime++;
          lastMoveDirection = 1;
          skippedCustomerIndex = i;
        }
      } else {
        if (customer0Direction === 0) {
          results[i] = (currentTime);
          currentTime++;
          lastMoveDirection = 0;
        } else if (customer1Direction === 1) {
          results[i+ 1] = (currentTime);
          currentTime++;
          lastMoveDirection = 0;
        }
      }
     }
   }
   // iterate through the times:
   // if the next index is the same time, determine time by lastMoveDirection
   // else, that customer moves at the current time


   return results;
 }