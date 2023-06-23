function getNeighbors(row, col, graph) {
  const valid = [];
  // Check top
  if (row > 0 && graph[row - 1][col] === 1) {
    valid.push([row - 1, col]);
    // console.log("this is top",graph[row-1][col])
  }
  //Check right
  if (col < graph[row].length - 1 && graph[row][col + 1] === 1) {
    valid.push([row, col + 1]);
    // console.log("this is right",graph[row][col+1])
  }
  //Check bottom
  if (row < graph.length - 1 && graph[row + 1][col] === 1) {
    valid.push([row + 1, col]);
    // console.log("this is bottom",graph[row+1][col])
  }
  //Check left
  if (col > 0 && graph[row][col - 1] === 1) {
    valid.push([row, col - 1]);
    // console.log("this is right",[row][col-1])
  }

  return valid;
}

function islandSize(row, col, graph) {
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Create a visited set to store visited nodes
  const visited = new Set();
  // Put the stringified starting node in visited `${r}, ${c}`
  visited.add(`${row}, ${col}`);
  // Initialize size to 0 let size = 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    const currNode = stack.pop();
    const currRow = currNode[0];
    const currCol = currNode[1];
    // DO THE THING (increment size by 1)
    if (graph[currRow][currCol] === 1) size++;

    // HINT: This is what your helper function `getNeighbors` is for
    const neighbors = getNeighbors(currRow, currCol, graph);

    neighbors.forEach((neighbor) => {
      const strCoords = `${neighbor[0]}, ${neighbor[1]}`;

      if (!visited.has(strCoords)) {
        // Then push all the UNVISITED neighbors on top of the stack visitor.forEach()
        stack.push(neighbor);
        // and mark them as visited
        // HINT: Remember, you're storing your visited nodes as strings!
        visited.add(strCoords);
      }
    });
  }
  return size;
}
//All Green
module.exports = [getNeighbors, islandSize];
