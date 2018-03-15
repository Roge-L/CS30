// Sound Demo
// Roger Lam
// March 15, 2018

// global variables
let bgmusic;
let boom;
// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images
function preload() {
  bgmusic = loadSound("sound/bgmusic.ogg");
  boom = loadSound("sound/boom8.wav");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
  bgmusic.setVolume(0.6);
  bgmusic.play();
  bgmusic.loop();
}

function draw() {
  background(255);
}

function keyPressed() {
  if (key === "f" || key === "F") {
    boom.play();
  }
}
