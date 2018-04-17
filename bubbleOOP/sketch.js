// Bubble OOP
// Roger Lam
// April 17, 2018

// global variables
let bubble;
let bubVelocity;
// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  bubble = new Bubble(300, height, 75, 0.15);
  bubVelocity = 0;
}

// a loop that repeats given actions according to your fps
function draw() {
  background(255);
  // if (bubble.y < 0) {
  bubble.drawBub();
  bubble.rise();
  // }
}

class Bubble {
  constructor(bubX, bubY, bubSize, riseAcceleration) {
    this.x = bubX;
    this.y = bubY;
    this.size = bubSize;
    this.riseAcceleration = riseAcceleration;
  }

  drawBub() {
    ellipse(this.x, this.y, this.size, this.size);
  }

  rise() {
    if (bubble.y > 0 + this.size / 2) {
      this.y -= 2.5;
    }
  }

  // wiggle() {
  //
  // }
}
