/*
 * @lc app=leetcode id=1268 lang=javascript
 *
 * [1268] Search Suggestions System
 */

// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  // sort products lexciographically
  products = products.sort((a, b) => {
    return a.localeCompare(b);
  })

  var suggested = [];
  // for every character in searchWord
  var searchTerm = '';
  for (character of searchWord) {
    searchTerm += character;
    var hits = [];
    for (product of products) {
      const prefix = product.slice(0, searchTerm.length);
      if (prefix === searchTerm) hits.push(product);
      if (hits.length === 3) break;
    }
    suggested.push(hits);
  }

  return suggested;
};

let results = suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse");
console.log(results);

// @lc code=end

