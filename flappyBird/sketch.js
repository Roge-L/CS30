// Flappy Bird
// Roger Lam
// March 6, 2018

// global variables

let canvas;
let canvasWidth, canvasHeight;
let birdX, birdY, birdSpeed;
let map;
let greenBar1, greenBar2, xBar1, xBar2, yBar;

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
  xBar1 = 0;
  xBar2 = 0;
  yBar = 693;
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
  ellipse(birdX, birdY, 60, 40);
}

function replaceBottomGreenBar() {
  // two rectangles of the green bar design
  // when one rectangle leaves the canvas, the other one replaces the first one's
  // place
  for (let i = 0; i < width; i -= 0.5) {
    image(greenBar1, xBar1, yBar, width);
    image(greenBar2, xBar2, yBar, width);
  }
}

function mousePressed() {
  print([mouseX, mouseY]);
}
