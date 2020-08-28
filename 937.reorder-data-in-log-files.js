/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Data in Log Files
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  var digitLogs = [];
  var letterLogs = [];

  // iterate through the logs
  for (log of logs) {
    const prefix = log.split(' ', 1);
    const id = prefix[0].slice(0, 3);
    if (id === 'dig') digitLogs.push(log);
    else if (id === 'let') letterLogs.push(log);
  }

  var sortedLetterLogs = letterLogs.sort((a, b) => {
    var aSplit = a.split(' ');
    var bSplit = b.split(' ');

    var aPrefix = aSplit.shift();;
    var bPrefix = bSplit.shift();;

    var aString = aSplit.join(' ');
    var bString = bSplit.join(' ');

    var result = aString.localeCompare(bString);
    if (result === 0) {
      return aPrefix.localeCompare(bPrefix);
    } else {
      return result;
    }
  })

  return sortedLetterLogs.concat(digitLogs);
};

var logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"];
var results = reorderLogFiles(logs);


// @lc code=end

