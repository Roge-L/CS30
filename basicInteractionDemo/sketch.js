// Basic Interaction Demo
// Feb 7, 2018
// Roger Lam

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, width), random(0, height), random(100), random(100));
}

function mouseClicked() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(0, 100), random(0, 100));
}
