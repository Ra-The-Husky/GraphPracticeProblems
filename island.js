function getNeighbors(row, col, graph) {
  const valid = []
  const currNode = graph[row][col]
  // Check top
  if(graph[row-1][col] === 1 && row > 0){
    valid.push([row-1,col])
    console.log("this is top",graph[row-1][col])
  }
   // Check right
  if(graph[row][col+1] === 1 && col<graph[row].length-1){
    valid.push([row,col+1])
    console.log("this is right",graph[row][col+1])
  }
  //check bottom
  if(graph[row+1][col] === 1 && row > 0){
    valid.push([row+1,col])
    console.log("this is bottom",graph[row+1][col])
  }
  // // Check left
  if(graph[row][col-1] === 1 && col>0){
    valid.push([row][col-1])
    console.log("this is right",[row][col-1])
  }

  return valid
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
