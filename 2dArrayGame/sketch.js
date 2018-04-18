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
let bitcoin, portalGun, poop, tRex, bomb;
let death;
let artifactX, artifactY;
let dirtX, dirtY;
let timeNow, timeUntilUncover;
let clickedX, clickedY;
let points;

// the preload function loads any wanted assets onto the canvas
function preload() {
  bitcoin = loadImage("assets/images/bitcoin.png");
  portalGun = loadImage("assets/images/portalGun.png");
  poop = loadImage("assets/images/poop.png");
  tRex = loadImage("assets/images/tRex.png");
  bomb = loadImage("assets/images/bomb.png");
  death = loadImage("assets/images/gameOver.png");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  cols = 15;
  rows = 12;
  artifactsGrid = artifactsGridCreation(cols, rows);
  dirtGrid = createDirtLayer(cols, rows);
  cellSize = 60;
  createCanvas(cellSize * cols + 2 * cellSize, cellSize * rows);
  artifactX = 0;
  artifactY = 0;
  dirtX = 0;
  dirtY = 0;
  points = 0;
}

// a loop that executes given actions according to your fps
function draw() {
  background(45, 32, 4);
  displayArtifactsGrid();
  createDirtLayer();
  displayDirtLayer();
  timeNow = millis();
  uncoverDirt();
  displayPoints();
}

// this function creates a 2d array that randomizes items around the map, then returns that array
function artifactsGridCreation(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(25) < 1) {
        randomGrid[x].push("bitcoin");
      } else if (random(25) < 1) {
        randomGrid[x].push("portalGun");
      } else if (random(25) < 1) {
        randomGrid[x].push("poop");
      } else if (random(25) < 1) {
        randomGrid[x].push("bomb");
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
  fill(62, 44, 12);
  for (artifactX = 0; artifactX < cols; artifactX++) {
    for (artifactY = 0; artifactY < rows; artifactY++) {
      if (artifactsGrid[artifactX][artifactY] === "bitcoin") {
        image(bitcoin, artifactX * cellSize, artifactY * cellSize, cellSize, cellSize);
      } else if (artifactsGrid[artifactX][artifactY] === "portalGun") {
        if (artifactX * cellSize - cellSize >= 0) {
          if (artifactsGrid[artifactX - 1][artifactY] >= 0 && artifactsGrid[artifactX - 1][artifactY] != "bitcoin" && artifactsGrid[artifactX - 1][artifactY] != "poop" && artifactsGrid[artifactX - 1][artifactY] != "bomb" && artifactsGrid[artifactX - 1][artifactY] != "portalGun") {
            image(portalGun, artifactX * cellSize - cellSize, artifactY * cellSize, cellSize * 2, cellSize);
          } else {
            artifactsGrid.splice(artifactX, 1, 0);
          }
        }
      } else if (artifactsGrid[artifactX][artifactY] === "poop") {
        image(poop, artifactX * cellSize, artifactY * cellSize, cellSize, cellSize);
      } else if (artifactsGrid[artifactX][artifactY] === "bomb") {
        image(bomb, artifactX * cellSize, artifactY * cellSize, cellSize, cellSize);
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
      } else {
        continue;
      }
    }
  }
}

// when the mouse is clicked, set the time when
function mouseClicked() {
  timeUntilUncover = millis() + 500;
  clickedX = mouseX / cellSize;
  clickedY = mouseY / cellSize;
  uncoverDirt();
  checkForItems();
}

// uncover the dirt block based on mouse coordinate after n seconds
function uncoverDirt() {
  if (timeNow > timeUntilUncover) {
    dirtGrid[floor(clickedX)][floor(clickedY)] = false;
    timeUntilUncover = undefined;
  }
}

function checkForItems() {
  if (dirtGrid[floor(clickedX)][floor(clickedY)] === false && artifactsGrid[floor(clickedX)][floor(clickedY)] === "bitcoin") {
    artifactsGrid[floor(clickedX)][floor(clickedY)] = 0;
    points += 10000;
  } else if (dirtGrid[floor(clickedX)][floor(clickedY)] === false && artifactsGrid[floor(clickedX)][floor(clickedY)] === "poop") {
    artifactsGrid[floor(clickedX)][floor(clickedY)] = 0;
    points += 10;
  } else if (dirtGrid[floor(clickedX)][floor(clickedY)] === false && dirtGrid[floor(clickedX) - 1][floor(clickedY)] === false && artifactsGrid[floor(clickedX)][floor(clickedY)] === "portalGun") {
    artifactsGrid[floor(clickedX)][floor(clickedY)] = 0;
    points += 100000;
  } else if (artifactsGrid[floor(clickedX)][floor(clickedY)] === "bomb") {
    gameOver();
  } else {
    displayPoints();
  }
}

function displayPoints() {
  textSize(20);
  fill(255, 215, 0);
  text("Points:", cols * cellSize + cellSize * 0.35, cellSize * 0.5);
  text(points, cols * cellSize + cellSize * 0.35, cellSize * 0.85);
}

function gameOver() {
  textSize(54);
  fill(255, 0, 0);
  text("GAME OVER", 300, 300);
  text("F5 TO RESTART", 300, 450);
}
// if dirt is uncovered and the beneath the same dirt is either bitcoin, poop, or portal gun, then add points to score on top right corner
// if bomb is uncovered, game over page
// shop on the right side, three buttons, first : double the points of each item found, second : faster uncovering, third : surprise gift (a bomb)

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
