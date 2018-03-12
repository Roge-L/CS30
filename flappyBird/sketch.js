// Flappy Bird
// Roger Lam
// March 6, 2018

// global variables

let canvas;
let canvasWidth, canvasHeight;
let birdX, birdY, birdSpeed;
let map;
let greenBar1, greenBar2, xBar1, xBar2, yBar;
let xPipe1, xPipe2, yTopPipe1, yTopPipe2, spaceBetween;

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
  xBar2 = width;
  yBar = 693;
  xPipe1 = 300;
  xPipe2 = 50;
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
  drawBird();
  replaceBottomGreenBar();
  firstPipe();
  secondPipe();
}

function drawBird() {
  fill("yellow");
  ellipse(birdX, birdY, 60, 40);
}

function replaceBottomGreenBar() {
  image(greenBar1, xBar1, yBar, width);
  image(greenBar2, xBar2, yBar, width);

  if (xBar1 > -width) {
    xBar1 -= 2.5;
    print(xBar1);
  } else {
    xBar1 = width;
  }

  if (xBar2 > -width) {
    xBar2 -= 2.5;
    print(xBar2);
  } else {
    xBar2 = width;
  }
}

function firstPipe() {
  if (xPipe1 > 0) {
    xPipe1 -= 2.5;
  } else {
    yTopPipe1 = random(100, yBar - spaceBetween);
    xPipe1 = width;
  }
  line(xPipe1, 0, xPipe1, yTopPipe1);
  line(xPipe1, yBar, xPipe1, yTopPipe1 + spaceBetween);
}

function secondPipe() {
  if (xPipe2 > 0) {
    xPipe2 -= 2.5;
  } else {
    yTopPipe2 = random(100, yBar - spaceBetween);
    xPipe2 = width;
  }
  line(xPipe2, 0, xPipe2, yTopPipe2);
  line(xPipe2, yBar, xPipe2, yTopPipe2 + spaceBetween);
}

// two pipes different y locations with same space between them, random y locations, xchange is same logic as green bar, difference of y locations
// must be the same (absolute value if needed)

function mousePressed() {
  print([mouseX, mouseY]);
}
