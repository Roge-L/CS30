// Game of Life
// Roger Lam
// March 27, 2018

// global variables

let rows = 100;
let cols = 100;
let cellSize;
let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function nextTurn() {
  let next = createEmpty2dArray(cols, rows);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {

      let neighbors = 0;
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          // don't break on the edges
          if (x + i >= 0 && x + i < cols && y + j >= 0 && y + j < rows) {
            neighbors += grid[x+i][y+j];
          }
        }
      }
      neighbors -= grid[x][y];

      // apply the "rules" of the game

      if (grid[x][y] === 1) {
        if (neighbors === 2 || neighbors === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
      else {
        if (neighbors === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
    }
  }
  grid = next;
}

function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  }
  else {
    grid[xcoord][ycoord] = 1;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = createRandom2dArray(cols, rows);
  }
  else if (key === " ") {
    nextTurn();
  }
}

function createEmpty2dArray() {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

function createRandom2dArray() {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
