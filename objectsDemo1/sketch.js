// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let ball = {
  x: 200,
  y: 300,
  radius: 50
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  fill(0);

  ball.x = mouseX;
  ball.y = mouseY;

  ellipse(ball.x,ball.y,50,50);
}
