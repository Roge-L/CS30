// Title
// Roger Lam
// March 5, 2018

// global variables

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images
function preload() {}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  ellipse(width / 2, height / 2, 500, 500);
  rectMode(CENTER);
  rect(width / 2, height / 2 - 200, 12, 50);
  angleMode(DEGREES);
  for (let i = 0; i <= 360; i += 60) {
    rotate(30);
    rect(width / 2, height / 2 - 200, 12, 50);
  }
}
