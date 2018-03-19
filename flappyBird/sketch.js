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
let state;
let title, playButton, gameOver;

// preloading images and sounds
function preload() {
  bird = loadImage("images/bird.png");
  map = loadImage("images/background.jpg");
  greenBar1 = loadImage("images/greenBar1.PNG");
  greenBar2 = loadImage("images/greenBar2.PNG");
  topPipe = loadImage("images/topPipe.png");
  bottomPipe = loadImage("images/bottomPipe.png");
  title = loadImage("images/title.png");
  playButton = loadImage("images/playButton.png");
  gameOver = loadImage("images/gameOver.png");
}

// assigning values to variables
function setup() {
  canvasWidth = 500;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  birdX = canvasWidth / 2;
  birdY = canvasHeight / 2.3;
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
  spaceBetween = windowHeight / 2.1;
  state = 2;
}

// centering the canvas
function positionCanvas() {
  canvas.position(windowWidth / 2 - canvasWidth / 2, windowHeight / 2 - canvasHeight / 2);
}

// executes 60 times per second
function draw() {
  background(0);
  positionCanvas();
  image(map, 0, 0);
  statesFunction();
}

// physics
function grav() {
  imageMode(CENTER);
  birdVelocity += birdAcceleration;
  birdVelocity += gravity;
  birdY += birdVelocity;
  birdAcceleration = 0;
  // if (birdY <= )
}

// jump when key pressed
function keyPressed() {
  birdAcceleration = -20;
  print([mouseX, mouseY]);
}

// moves the green bar at the bottom
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

// moving the first pair of pipes
function firstPipe() {
  // when the pipes get out of the screen, returns to right side of screen with a new random height
  if (xPipe1 > -topPipe.width / 2) {
    xPipe1 -= 2.5;
  } else {
    yTopPipe1 = random(0, yBar - spaceBetween);
    xPipe1 = width + topPipe.width / 2;
  }
  imageMode(CENTER);
  image(topPipe, xPipe1, yTopPipe1);
  image(bottomPipe, xPipe1, yTopPipe1 + spaceBetween);
}

// moving the second pair of pipes
function secondPipe() {
  // when the pipes get out of the screen, returns to right side of screen with a new random height
  if (xPipe2 > -topPipe.width / 2) {
    xPipe2 -= 2.5;
  } else {
    yTopPipe2 = random(0, yBar - spaceBetween);
    xPipe2 = width + topPipe.width / 2;
  }
  imageMode(CENTER);
  image(topPipe, xPipe2, yTopPipe2);
  image(bottomPipe, xPipe2, yTopPipe2 + spaceBetween);
}

// collision detection for the bird
function collision() {
  if (birdY >= yBar || birdY <= 0) {
    state = 3;
  }
  // PLEASE ADD GREEN PIPE COLLISIONS
}

function statesFunction() {
  if (state === 1) {
    imageMode(CENTER);
    image(playButton, canvasWidth / 2, canvasHeight / 1.6, playButton.width * 0.5, playButton.height * 0.5);
    image(title, canvasWidth / 2, canvasHeight / 4.25, title.width * 0.124, title.height * 0.124);
    image(bird, birdX, birdY, bird.width * 0.2, bird.height * 0.2);
  } else if (state === 2) {
    replaceBottomGreenBar();
    firstPipe();
    secondPipe();
    grav();
    image(bird, birdX, birdY, 90.48, 90.24);
    collision();
  } else {
    image(topPipe, xPipe1, yTopPipe1);
    image(bottomPipe, xPipe1, yTopPipe1 + spaceBetween);
    image(topPipe, xPipe2, yTopPipe2);
    image(bottomPipe, xPipe2, yTopPipe2 + spaceBetween);
    imageMode(CENTER);
    image(gameOver, canvasWidth / 2, canvasHeight / 4.25);
  }
}
