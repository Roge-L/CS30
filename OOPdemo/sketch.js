// Title
// Roger Lam
// April 1, 2018

// global variables

let myBall;
let anotherBall;
let thirdBall;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  myBall = new Ball(100, 500);
  anotherBall = new Ball(500, 400);
  thirdBall = new Ball(300, 1000);
}

// a loop that repeats given actions according to your fps
function draw() {
  background(255);
  myBall.display();
  anotherBall.display();
  thirdBall.display();
  thirdBall.jiggle();
}

function mousePressed() {
  thirdBall.goTo(mouseX, mouseY);
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
  }

  display() {
    ellipse(this.x, this.y, this.radius, this.radius);
  }

  jiggle() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  goTo(x, y) {
    this.x = x;
    this.y = y;
  }
}
