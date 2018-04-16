// Title
// Roger Lam
// April 1, 2018

// global variables
let ballArray = [];

let myBall;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  ballArray.push(new Ball(300, 400));
}

// a loop that repeats given actions according to your fps
function draw() {
  background(255);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].jiggle();
    ballArray[i].display();
  }
}

function mousePressed() {
  ballArray.push(new Ball(mouseX, mouseY));
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
