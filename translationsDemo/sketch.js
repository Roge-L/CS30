// Translations Demo
// Roger Lam
// March 13, 2018

// global variables

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images
function preload() {

}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  push();
  fill("yellow");
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rectMode(CENTER);
  rotate(frameCount * 50);
  rect(0, 0, 300, 50);
  pop();
  rect(100, 100, 200, 200);
}
