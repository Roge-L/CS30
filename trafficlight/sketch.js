//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.

let state;
let timeNow;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  timeNow = millis();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);
  if (timeNow % 5000) {
    state = 0;
  }
  //lights
  if (state === 0) {
    fill(255, 0, 0);
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  if (state === 1) {
    fill(255, 255, 0);
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  if (state === 3) {
    fill(0, 255, 0);
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}
