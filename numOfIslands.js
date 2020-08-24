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
    if (rowIndex - 1 > 0 && !coordinates[colIndex + ',' + (rowIndex - 1)]) {
      if (grid[rowIndex - 1][colIndex] === '1') {
        var newIndex = rowIndex - 1
        var xy = colIndex + ',' + newIndex;
        coordinates[xy] = true;
        searchAdjacentCells(newIndex, colIndex);
      }
    }
    // Search East
    if (colIndex + 1 < width && !coordinates[(colIndex + 1) + ',' + rowIndex]) {
      if (grid[rowIndex][colIndex + 1] === '1') {
        var newIndex = colIndex + 1
        var xy = newIndex + ',' + rowIndex;
        coordinates[xy] = true;
        searchAdjacentCells(rowIndex, newIndex);
      }
    }

    // Search South
    if (rowIndex + 1 < height && !coordinates[colIndex + ',' + (rowIndex + 1)]) {
      if (grid[rowIndex + 1][colIndex] === '1') {
        var newIndex = rowIndex + 1
        var xy = colIndex + ',' + newIndex;
        coordinates[xy] = true;
        searchAdjacentCells(newIndex, colIndex);
      }
    }

    // Search West
    if (colIndex - 1 > 0 && !coordinates[(colIndex - 1) + ',' + rowIndex]) {
      if (grid[rowIndex][colIndex - 1] === '1') {
        var newIndex = colIndex - 1
        var xy = newIndex + ',' + rowIndex;
        coordinates[xy] = true;
        searchAdjacentCells(rowIndex, newIndex);
      }
    }
  }

  for (var rowIndex = 0; rowIndex < height; rowIndex++) {
    for (var colIndex = 0; colIndex < width; colIndex++) {
      if (grid[rowIndex][colIndex] === '1' && !coordinates[colIndex + ',' + rowIndex]) {
        islandCount++;

        searchAdjacentCells(rowIndex, colIndex);
        var xy = colIndex + ',' + rowIndex;
        coordinates[xy] = true;
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