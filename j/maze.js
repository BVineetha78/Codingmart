const input = require(`readline-sync`);

// Read the size of the matrix from the user
const x = parseInt(input.question("Enter the size of the matrix: "));

// Create the maze array
const maze = [];
for (let i = 0; i < x; i++) {
  const row = [];
  for (let j = 0; j < x; j++) {
    const value = parseInt(input.question(`Enter the value for position (${i},${j}): `));
    row.push(value);
  }
  maze.push(row);
}

// Function to solve the maze and find the path
function solve(maze, sol, i, j, destRow, destCol) {
  const row = maze.length;
  const col = maze[0].length;

  // Check if the current cell is a valid position
  if (i < 0 || i >= row || j < 0 || j >= col || maze[i][j] !== 1 || sol[i][j] === 1) {
    return false;
  }

  // Mark the current cell as part of the solution path
  sol[i][j] = 1;

  // Check if the current cell is the destination
  if (i === destRow && j === destCol) {
    return true;
  }

  // Recursively explore adjacent cells in all directions
  if (solve(maze, sol, i + 1, j, destRow, destCol)) {
    return true;
  }
  if (solve(maze, sol, i, j + 1, destRow, destCol)) {
    return true;
  }
  if (solve(maze, sol, i - 1, j, destRow, destCol)) {
    return true;
  }
  if (solve(maze, sol, i, j - 1, destRow, destCol)) {
    return true;
  }

  // If none of the adjacent cells lead to the destination, backtrack and mark the current cell as not part of the solution
  sol[i][j] = 0;
  return false;
}

// Function to find the path in the maze
function findPath(maze, srcRow, srcCol, destRow, destCol) {
  const sol = [];
  for (let i = 0; i < maze.length; i++) {
    sol.push(new Array(maze[0].length).fill(0));
  }

  // Solve the maze
  const pathExists = solve(maze, sol, srcRow, srcCol, destRow, destCol);

  if (pathExists) {
    console.log("A valid path exists in the maze:");
    console.log(sol);
  } else {
    console.log("No valid path exists in the maze.");
  }
}

// Call the findPath function with source and destination coordinates
findPath(maze, 0, 0, x - 1, x - 1);