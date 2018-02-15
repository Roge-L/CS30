// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let x, y, radius;
let dx, dy;
let dvd;

function preload() {
  dvd = loadImage("images/logo.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
}

function draw() {
  background(125)
  moveThing();
  displayThing();
}

function moveThing() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + dvd.height()/2 >= height || y + dvd.height()/2 <= 0) {
    dy = dy * -1
  }

  if (x + dvd.width()/2 >= width || x + dvd.width()/2 <= 0) {
    dx = dx * -1
  }
}

function displayThing() {
  fill(0);
  // ellipse(x, y, radius * 2, radius * 2)
  image(dvd, x, y);
}
