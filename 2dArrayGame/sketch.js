// Archeology Game
// Roger Lam
// April 6, 2018

// global variables

let artifactsGrid;
let cols, rows;
let cellSize;
let bitcoin, portalGun, poop, tRex;

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
  cellSize = 60;
}

// a loop that executes given actions according to your fps
function draw() {
  background(255);
  displayArtifactsGrid();
}

function artifactsGridCreation(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      if (random(1500) < 1) {
        randomGrid[x].push("bitcoin");
      } else if (random(1500) < 1) {
        randomGrid[x].push("portalGun");
      } else if (random(1000) < 1) {
        randomGrid[x].push("poop");
      } else if (random(10) < 1) {
        randomGrid[x].push("tRex");
      } else {
        randomGrid[x].push(0);
      }
    }
  }
  return randomGrid;
}

function checkDinoSurroundings() {
  for (let i = 1; i < 4; i++) {
    for (let j = 1; i < 4; j++) {
      if (artifactsGrid[x - i][y - j] != "bitcoin" && artifactsGrid[x - i][y - j] != "poop" && artifactsGrid[x - i][y - j] != "portalGun") {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

function displayArtifactsGrid() {
  fill(40, 22, 11);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (artifactsGrid[x][y] === 0) {
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
      } else if (artifactsGrid[x][y] === "bitcoin") {
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
        image(bitcoin, x * cellSize, y * cellSize, cellSize, cellSize);
      } else if (artifactsGrid[x][y] === "portalGun") {
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
        if (x * cellSize - cellSize >= 0) {
          if (artifactsGrid[x - 1][y] >= 0 && artifactsGrid[x - 1][y] != "bitcoin" && artifactsGrid[x - 1][y] != "poop" && artifactsGrid[x - 1][y] != "portalGun") {
            image(portalGun, x * cellSize - cellSize, y * cellSize, cellSize * 2, cellSize);
          }
        }
      } else if (artifactsGrid[x][y] === "poop") {
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
        image(poop, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else {
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
        if (x * cellSize - 5 * cellSize >= 0 && y * cellSize - 5 * cellSize >= 0) {
          image(tRex, x * cellSize - 5 * cellSize, y * cellSize - 5 * cellSize, 5 * cellSize, 5 * cellSize);
        }
      }
    }
  }
}

function displayDirtLayer() {
  fill(85, 64, 16);
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
