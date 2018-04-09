// Archeology Game
// Roger Lam
// April 6, 2018

// global variables

let grid;
let cols, rows;
let cellSize;
let bitcoin, portalGun;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function preload() {
  bitcoin = loadImage("assets/images/bitcoin.png");
  portalGun = loadImage("assets/images/portalGun.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = 10;
  rows = 10;
  grid = gridCreation(cols, rows);
  cellSize = 60;
}

// a loop that executes given actions according to your fps
function draw() {
  background(255);
  displayGrid();
}

function gridCreation(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(100) < 1) {
        randomGrid[x].push("bitcoin");
      } else if (random(100) === 50) {
        randomGrid[x].push("portalGun");
      } else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}

function spawnItems() {
  print("not yet");
}

function displayGrid() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(85, 64, 16);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else if (grid[x][y] === "bitcoin") {
        fill(85, 64, 16);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
        // fill(228, 187, 64);
        image(bitcoin, x * cellSize, y * cellSize, 60, 60);
      } else if (grid[x][y] === "portalGun") {
        fill(85, 64, 16);
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
        image(portalGun, x * cellSize, y * cellSize, 120, 60);
      }
    }
  }
}

// you are broke.
// one day you go into your backyard and something is sticking out of the ground...
// turns out there are all sorts of things in your backyard, including ancient artifacts and other valuable items

// NEEDS:
// 2d grid
// random items
// timer for each square, starts counting down when player uncovers it
// reward system/inventory system

// WANTS:
// title screen
// progress save
// nice ass graphics
// game over
// music/sounds
