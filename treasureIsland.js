
/**
 * @param {char[][]} grid
 * @return {number}
 */

var findShortestDistance = function(grid) {


}


let board = [
  ['O', 'O', 'O', 'O'],
  ['D', 'O', 'D', 'O'],
  ['O', 'O', 'O', 'O'],
  ['X', 'D', 'D', 'O']
];

var result = findShortestDistance(board);
console.assert(result === 5, `Expected: 5. Received: ${result}`);
