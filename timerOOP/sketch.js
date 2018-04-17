// Timer OOP
// Roger Lam
// April 17, 2018

// global variables

let myTimer;

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(5000);
}

// a loop that repeats given actions according to your fps
function draw() {
  background(255);
  if (myTimer.isDone()) {
    ellipse(random(width),random(height),random(25, 100), random(25, 100));
    myTimer.reset(2000);
  }
}

class Timer {
  constructor(waitTime) {
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime) {
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishTime = this.startTime + this.waitTime;
    this.TimerIsDone = false;
  }

  isDone() {
    if (millis() >= this.finishTime) {
      return true;
    }
    else {
      return false;
    }
  }
}
