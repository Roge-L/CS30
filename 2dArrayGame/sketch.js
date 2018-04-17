// Archeology Game
// Roger Lam
// April 6, 2018

// you are broke.
// one day you go into your backyard and something is sticking out of the ground...
// turns out there are all sorts of things in your backyard, including ancient artifacts and other valuable items

// global variables
let artifactsGrid, dirtGrid;
let cols, rows;
let cellSize;
let bitcoin, portalGun, poop, tRex;
let artifactX, artifactY;
let dirtX, dirtY;
let timeNow, timeUntilUncover;
let clickedX, clickedY;

// the preload function loads any wanted assets onto the canvas
function preload() {
  bitcoin = loadImage("assets/images/bitcoin.png");
  portalGun = loadImage("assets/images/portalGun.png");
  poop = loadImage("assets/images/poop.png");
  tRex = loadImage("assets/images/tRex.png");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  cols = 15;
  rows = 12;
  artifactsGrid = artifactsGridCreation(cols, rows);
  dirtGrid = createDirtLayer(cols, rows);
  cellSize = 60;
  createCanvas(cellSize * cols, cellSize * rows);
  artifactX = 0;
  artifactY = 0;
  dirtX = 0;
  dirtY = 0;
}

// a loop that executes given actions according to your fps
function draw() {
  background(255);
  displayArtifactsGrid();
  createDirtLayer();
  displayDirtLayer();
  timeNow = millis();
  uncoverDirt();
}

// this function creates a 2d array that randomizes items around the map, then returns that array
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

// this function draws the assets from the created 2d array from the artifactsGridCreation function
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

// this function creates a 2d array with only one item...the dirt
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

// this function draws the dirt, it goes over the artifacts and it functions with a boolean-oriented system
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

// when the mouse is clicked, set the time when
function mouseClicked() {
  timeUntilUncover = millis() + 3000;
  clickedX = mouseX / cellSize;
  clickedY = mouseY / cellSize;
}

// uncover the dirt block based on mouse coordinate after n seconds
function uncoverDirt() {
  if (timeNow > timeUntilUncover) {
    dirtGrid[floor(clickedX)][floor(clickedY)] = false;
    timeUntilUncover = undefined;
  }
}

// NEEDS:
// 2d grid
// random items
// timer for square, starts counting down when player uncovers it  REFURBISH THIS
// reward system/inventory system    FINISH THIS
// ADD DINOSAUR BONES MANE

// WANTS:
// title screen
// progress save
// nice ass graphics
// game over
// music/sounds
