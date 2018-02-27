// global variables
let tri;

function setup() {
  createCanvas(windowWidth, windowHeight);
  tri = 0;
}

function draw() {}

function keyPressed() {
  if (key === "t" || key === "T") {
    tri = 1;
  }
  if (key === "x" || key === "X" || key === "z" || key === "Z") {
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(random(0, width), random(0, height), 100);
  }
}

function mouseClicked() {
  if (tri === 1) {
    push();
    translate(random(0, width), random(0, height));
    fill(random(0, 255), random(0, 255), random(0, 255));
    triangle(30, 75, 58, 20, 86, 75);
    pop();
    tri = 0;
  }
}
