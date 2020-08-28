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
    const prefix = log.split(' ', 2);
    const first = prefix[1].slice(0, 1);
    if (first <= 9) digitLogs.push(log);
    else letterLogs.push(log);
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
logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"];
results = reorderLogFiles(logs);


// @lc code=end

