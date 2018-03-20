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
let point;
let flapFont;
let flap, pointSound, hitSound, dieSound;

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
  flapFont = loadFont("font/04B_19__.TTF");
  flap = loadSound("sounds/Everything/sfx_wing.wav");
  pointSound = loadSound("sounds/Everything/sfx_point.wav");
  hitSound = loadSound("sounds/Everything/sfx_hit.wav");
  dieSound = loadSound("sounds/Everything/sfx_die.wav");
}

// assigning values to variables
function setup() {
  canvasWidth = 500;
  canvasHeight = windowHeight;
  canvas = createCanvas(canvasWidth, canvasHeight);
  birdX = canvasWidth / 2;
  birdY = canvasHeight / 2.3;
  gravity = 0.6;
  birdVelocity = 0;
  birdAcceleration = 0;
  xBar1 = 0;
  xBar2 = width;
  yBar = 693;
  xPipe1 = width;
  xPipe2 = width + 300;
  spaceBetween = windowHeight / 4;
  yTopPipe1 = random(0, yBar - spaceBetween);
  yTopPipe2 = random(0, yBar - spaceBetween);
  state = 1;
  point = 0;
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
  birdVelocity += birdAcceleration;
  birdVelocity += gravity;
  birdY += birdVelocity;
  birdAcceleration = 0;
  // FIX ME, I WANT PHYSICS LIKE THE ORIGINAL GAME
}

// jump when key pressed
function keyPressed() {
  if (state === 2) {
    birdAcceleration = -20;
    flap.setVolume(0.3);
    flap.play();
  }
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
  image(topPipe, xPipe1, 0, topPipe.width, yTopPipe1);
  image(bottomPipe, xPipe1, yTopPipe1 + spaceBetween, bottomPipe.width, (canvasHeight - (yTopPipe1 + spaceBetween + (abs(canvasHeight - yBar)))));
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
  image(topPipe, xPipe2, 0, topPipe.width, yTopPipe2);
  image(bottomPipe, xPipe2, yTopPipe2 + spaceBetween, bottomPipe.width, (canvasHeight - (yTopPipe2 + spaceBetween + (abs(canvasHeight - yBar)))));
}

// collision detection for the bird
function collision() {
  if (birdY >= yBar) {
    hitSound.setVolume(0.4);
    hitSound.play();
    dieSound.setVolume(0.4);
    dieSound.play(0.2);
    state = 3;
  }
  if (birdY <= 0) {
    hitSound.setVolume(0.4);
    hitSound.play();
    dieSound.setVolume(0.4);
    dieSound.play(0.2);
    state = 4;
  }
  // PLEASE ADD GREEN PIPE COLLISIONS
}

// point system
function score() {
  if (xPipe1 > birdX - 1.5 && xPipe1 < birdX + 1.5 || xPipe2 > birdX - 1.5 && xPipe2 < birdX + 1.5) {
    point += 1;
    pointSound.setVolume(0.5);
    pointSound.play();
  }
  textSize(54);
  textFont(flapFont);
  stroke("black");
  strokeWeight(4);
  fill("white");
  if (state === 2) {
    text(point, birdX, canvasHeight / 8);
  }
  else if (state === 3 || state === 4) {
    textSize(64);
    text(point, birdX, canvasHeight / 2);
  }
}

// play button
function mouseClicked() {
  if (mouseX > ((canvasWidth / 2) - (playButton.width * 0.5) * 0.5) && mouseX < ((canvasWidth / 2) + (playButton.width * 0.5) * 0.5) && mouseY > ((canvasHeight / 1.6) - (playButton.height * 0.5) * 0.5) &&
    mouseY < ((canvasHeight / 1.6) + (playButton.height * 0.5) * 0.5) && state === 1) {
    state = 2;
  }
}

function displayPipesAtTheEnd() {
  image(topPipe, xPipe1, 0, topPipe.width, yTopPipe1);
  image(bottomPipe, xPipe1, yTopPipe1 + spaceBetween, bottomPipe.width, (canvasHeight - (yTopPipe1 + spaceBetween + (abs(canvasHeight - yBar)))));
}

// function which reacts to states, states are essential for any game to work
function statesFunction() {
  if (state === 1) {
    imageMode(CENTER);
    image(playButton, canvasWidth / 2, canvasHeight / 1.6, playButton.width * 0.5, playButton.height * 0.5);
    image(title, canvasWidth / 2, canvasHeight / 4.25, title.width * 0.124, title.height * 0.124);

    imageMode(CENTER);
    image(bird, birdX, birdY, bird.width * 0.2, bird.height * 0.2);
  } else if (state === 2) {
    replaceBottomGreenBar();
    firstPipe();
    secondPipe();
    score();
    grav();
    imageMode(CENTER);
    image(bird, birdX, birdY, bird.width * 0.2, bird.height * 0.2);
    collision();
  } else if (state === 3) {
    displayPipesAtTheEnd();
    score();
    imageMode(CENTER);
    image(gameOver, canvasWidth / 2, canvasHeight / 4.25);
  }
  else {
    grav();
    displayPipesAtTheEnd();
    score();
    imageMode(CENTER);
    image(bird, birdX, birdY, bird.width * 0.2, bird.height * 0.2);
    image(gameOver, canvasWidth / 2, canvasHeight / 4.25);
  }
}

// TO DO:
// HTML
// Collision Detection
// Physics
