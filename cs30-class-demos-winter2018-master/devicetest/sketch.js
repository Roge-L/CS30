// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let gear;
let x, y;

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)
function preload() {
  gear = loadImage("images/gear.png");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(255);

  image(gear, 0, 0);

  stroke(0);
  line(0, 0, 200, 200);

  fill(0, 255, 0, 100);
  noStroke();

  rect(mouseX, mouseY, 100, 300);
  ellipse(x, y, 300, 200);
}

function deviceShaken() {
  x = random(0, width);
  y = random(0, height);
}
