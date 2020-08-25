/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0) {return 0}
  // traverse row
  // once a 1 is hit:
    // increment counter
    // start checking every adjacent spot for continuous land
    // at each 1, add the coordinates to an object to make sure we do not count land twice
  const height = grid.length;
  const width = grid[0].length;

  var coordinates = {};
  var islandCount = 0;

  var searchAdjacentCells = function(rowIndex, colIndex) {
    // Search North
    var newIndex = rowIndex - 1
    if (newIndex >= 0 && !coordinates[newIndex + ',' + colIndex]) {
      if (grid[newIndex][colIndex] === '1') {
        var xy = newIndex + ',' + colIndex;
        coordinates[xy] = true;
        searchAdjacentCells(newIndex, colIndex);
      }
    }
    // Search East
    newIndex = colIndex + 1
    if (newIndex < width && !coordinates[rowIndex + ',' + newIndex]) {
      if (grid[rowIndex][newIndex] === '1') {
        var xy = rowIndex + ',' + newIndex;
        coordinates[xy] = true;
        searchAdjacentCells(rowIndex, newIndex);
      }
    }

    // Search South
    newIndex = rowIndex + 1
    if (newIndex < height && !coordinates[newIndex + ',' + colIndex]) {
      if (grid[newIndex][colIndex] === '1') {
        var xy = newIndex + ',' + colIndex;
        coordinates[xy] = true;
        searchAdjacentCells(newIndex, colIndex);
      }
    }

    // Search West
    newIndex = colIndex - 1;
    if (newIndex >= 0 && !coordinates[rowIndex + ',' + newIndex]) {
      if (grid[rowIndex][newIndex] === '1') {
        var xy = rowIndex + ',' + newIndex;
        coordinates[xy] = true;
        searchAdjacentCells(rowIndex, newIndex);
      }
    }
  }

  for (var rowIndex = 0; rowIndex < height; rowIndex++) {
    for (var colIndex = 0; colIndex < width; colIndex++) {
      if (grid[rowIndex][colIndex] === '1' && !coordinates[rowIndex + ',' + colIndex]) {
        islandCount++;
        var xy = rowIndex + ',' + colIndex;
        coordinates[xy] = true;
        searchAdjacentCells(rowIndex, colIndex);
      }
    }
  }

  return islandCount;
};

var grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

var result = numIslands(grid);
console.assert(result === 1, 'Expected only 1 island');

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
result = numIslands(grid);
console.assert(result === 3, 'Expected 3 islands');

grid = [
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
]
result = numIslands(grid);
console.assert(result === 1, 'Expected 1 island');