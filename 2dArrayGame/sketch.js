// Archeology Game
// Roger Lam
// April 6, 2018

// global variables

let artifactsGrid, dirtGrid;
let cols, rows;
let cellSize;
let bitcoin, portalGun, poop, tRex;
let artifactX, artifactY;
let dirtX, dirtY;
let squareX, squareY;
let uncover;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function preload() {
  bitcoin = loadImage("assets/images/bitcoin.png");
  portalGun = loadImage("assets/images/portalGun.png");
  poop = loadImage("assets/images/poop.png");
  tRex = loadImage("assets/images/tRex.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = 10;
  rows = 10;
  artifactsGrid = artifactsGridCreation(cols, rows);
  dirtGrid = createDirtLayer(cols, rows);
  cellSize = 60;
  artifactX = 0;
  artifactY = 0;
  dirtX = 0;
  dirtY = 0;
  squareX = mouseX / cellSize;
  squareY = mouseY / cellSize;
}

// a loop that executes given actions according to your fps
function draw() {
  background(255);
  displayArtifactsGrid();
  createDirtLayer();
  displayDirtLayer();
}

function artifactsGridCreation(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(5) < 1) {
        randomGrid[x].push("bitcoin");
      } else if (random(5) < 1) {
        randomGrid[x].push("portalGun");
      } else if (random(5) < 1) {
        randomGrid[x].push("poop");
      } else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}

// function checkDinoSurroundings() {
//   for (let i = 1; i < 4; i++) {
//     for (let j = 1; i < 4; j++) {
//       if (artifactsGrid[artifactX - i][artifactY - j] != "bitcoin" && artifactsGrid[artifactX - i][artifactY - j] != "poop" && artifactsGrid[artifactX - i][artifactY - j] != "portalGun") {
//         return true;
//       }
//       else {
//         return false;
//       }
//     }
//   }
// }

function displayArtifactsGrid() {
  fill(40, 22, 11);
  for (artifactX = 0; artifactX < cols; artifactX++) {
    for (artifactY = 0; artifactY < rows; artifactY++) {
      if (artifactsGrid[artifactX][artifactY] === "bitcoin") {
        image(bitcoin, artifactX * cellSize, artifactY * cellSize, cellSize, cellSize);
      } else if (artifactsGrid[artifactX][artifactY] === "portalGun") {
        if (artifactX * cellSize - cellSize >= 0) {
          if (artifactsGrid[artifactX - 1][artifactY] >= 0 && artifactsGrid[artifactX - 1][artifactY] != "bitcoin" && artifactsGrid[artifactX - 1][artifactY] != "poop" && artifactsGrid[artifactX - 1][artifactY] != "portalGun") {
            image(portalGun, artifactX * cellSize - cellSize, artifactY * cellSize, cellSize * 2, cellSize);
          }
          else {
            artifactsGrid.splice(artifactX, 1, 0);
          }
        }
      } else if (artifactsGrid[artifactX][artifactY] === "poop") {
        image(poop, artifactX * cellSize, artifactY * cellSize, cellSize, cellSize);
      }
    }
  }
}

function createDirtLayer(cols, rows) {
  let grid = [];
  for (let x = 0; x < cols; x++) {
    grid.push([]);
    for (let y = 0; y < rows; y++) {
      grid[x].push(true);
    }
  }
  return grid;
}

function displayDirtLayer() {
  fill(85, 64, 16);
  for (dirtX = 0; dirtX < cols; dirtX++) {
    for (dirtY = 0; dirtY < rows; dirtY++) {
      if (dirtGrid[dirtX][dirtY] === true) {
        rect(dirtX * cellSize, dirtY * cellSize, cellSize, cellSize);
      }
      else {
        continue;
      }
    }
  }
}

function mousePressed() {
  setTimeout(dirtGrid[floor(squareX)][floor(squareY)] = false, 2000);
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
