// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let booRight, booLeft
let speed
let x, y
let rightOrLeft

function preload() {
  booRight = loadImage("images/booRight.png")
  booLeft = loadImage("images/booLeft.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2
  y = height / 2
  speed = 5
  rightOrLeft = 0
}

function draw() {
  background(0);
  keyPressed();
  if (x < -width) {
    x = width
  }
}

function keyPressed() {
  if (key === "w" || key === "W") {
    y -= speed;
    if (rightOrLeft === 0) {
      image(booLeft, x, y);
    } else {
      image(booRight, x, y);
    }
  }
  if (key === "s" || key === "S") {
    y += speed;
    if (rightOrLeft === 1) {
      image(booRight, x, y);
    } else {
      image(booLeft, x, y);
    }
  }
  if (key === "a" || key === "A") {
    x -= speed;
    image(booLeft, x, y);
    rightOrLeft = 0
  }
  if (key === "d" || key === "D") {
    x += speed;
    image(booRight, x, y);
    rightOrLeft = 1
  }
}
