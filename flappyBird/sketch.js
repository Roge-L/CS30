// Flappy Bird
// Roger Lam
// March 6, 2018

// global variables

let canvas;
let canvasWidth, canvasHeight;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  canvasWidth = 500;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
}

function positionCanvas() {
  canvas.position(windowWidth / 2 - canvasWidth / 2, windowHeight / 2 - canvasHeight / 2);
}

function draw() {
  background(0);
  positionCanvas();
}
