// Flappy Bird
// Roger Lam
// March 6, 2018

// global variables

let canvas;
let canvasWidth, canvasHeight;
let birdX, birdY, birdSpeed;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function preload() {
  map = loadImage("images/background.jpg");
  greenBar1 = loadImage("images/greenBar1.PNG");
  greenBar2 = loadImage("images/greenBar2.PNG");
}

function setup() {
  canvasWidth = 500;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  birdX = 150;
  birdY = 400;
}

function positionCanvas() {
  canvas.position(windowWidth / 2 - canvasWidth / 2, windowHeight / 2 - canvasHeight / 2);
}

function draw() {
  background(0);
  positionCanvas();
  image(map, 0, 0);
  drawBird();
  replaceBottomGreenBar();
}

function drawBird() {
  fill("yellow");
  ellipse(birdX,birdY,20,20);
}

function replaceBottomGreenBar() {
  // two rectangles of the green bar design
  // when one rectangle leaves the canvas, the other one replaces the first one's
  // place


}
