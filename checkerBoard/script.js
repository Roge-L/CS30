// global variables

let filled;

function setup() {
  createCanvas(windowWidth,windowHeight);
  filled = false;
}

function draw() {
  for (let x = 0; x < 400; x += 50) {
    for (let y = 0; y < 400; y += 50) {
      if (filled) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x,y,50,50);
      filled = !filled;
    }
    filled = !filled;
  }
}
