// Flappy Bird
// Roger Lam
// March 6, 2018

// global variables

let canvas;
let canvasWidth, canvasHeight;
let gravity, birdVelocity, birdAcceleration;
let bird;
let birdX, birdY;
let map;
let greenBar1, greenBar2, xBar1, xBar2, yBar;
let topPipe, bottomPipe;
let xPipe1, xPipe2, yTopPipe1, yTopPipe2, spaceBetween;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function preload() {
  bird = loadImage("images/bird.png");
  map = loadImage("images/background.jpg");
  greenBar1 = loadImage("images/greenBar1.PNG");
  greenBar2 = loadImage("images/greenBar2.PNG");
  topPipe = loadImage("images/topPipe.png");
  bottomPipe = loadImage("images/bottomPipe.png");
}

function setup() {
  canvasWidth = 500;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  birdX = 150;
  birdY = 0;
  gravity = 0.5;
  birdVelocity = 0;
  birdAcceleration = 0;
  xBar1 = 0;
  xBar2 = width;
  yBar = 693;
  xPipe1 = width;
  xPipe2 = width + 300;
  yTopPipe1 = 300;
  yTopPipe2 = 500;
  spaceBetween = 200;
}

function positionCanvas() {
  canvas.position(windowWidth / 2 - canvasWidth / 2, windowHeight / 2 - canvasHeight / 2);
}

function draw() {
  background(0);
  positionCanvas();
  image(map, 0, 0);
  replaceBottomGreenBar();
  firstPipe();
  secondPipe();
  grav();
  image(bird, birdX, birdY, 90.48, 90.24);
}

function grav() {
  imageMode(CENTER);
  birdVelocity += birdAcceleration;
  birdVelocity += gravity;
  birdY += birdVelocity;
  birdAcceleration = 0;
}

// the bird distance jumped must be 20, no more or less regardless of gravity

function keyPressed() {
  birdAcceleration = -20;
}

// gravity increases with time, when bird jumps gravity resets

function replaceBottomGreenBar() {
  image(greenBar1, xBar1, yBar, width);
  image(greenBar2, xBar2, yBar, width);

  if (xBar1 > -width) {
    xBar1 -= 2.5;
  } else {
    xBar1 = width;
  }

  if (xBar2 > -width) {
    xBar2 -= 2.5;
  } else {
    xBar2 = width;
  }
}

function firstPipe() {
  if (xPipe1 > -topPipe.width / 2) {
    xPipe1 -= 2.5;
  } else {
    yTopPipe1 = random(100, yBar - spaceBetween);
    xPipe1 = width + topPipe.width / 2;
  }
  imageMode(CENTER);
  image(topPipe, xPipe1, 0, 100, yTopPipe1);
  image(bottomPipe, xPipe1, yTopPipe1 + spaceBetween, 100, yTopPipe1);
}

function secondPipe() {
  if (xPipe2 > -topPipe.width / 2) {
    xPipe2 -= 2.5;
  } else {
    yTopPipe2 = random(100, yBar - spaceBetween);
    xPipe2 = width + topPipe.width / 2;
  }
  imageMode(CENTER);
  image(topPipe, xPipe2, 0, 100, yTopPipe2);
  image(bottomPipe, xPipe2, yTopPipe2 + spaceBetween, 100, yTopPipe2);
}
