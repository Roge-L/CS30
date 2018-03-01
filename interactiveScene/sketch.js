// Interactive Scene Assignment
// Roger Lam
// Feb 28, 2018

// global variables
let booRight, booLeft;
let speed;
let booX, booY;
let rightOrLeft;
let burger, cherries, cookie, iceCream, pizza;
let burgerTime, cherriesTime, cookieTime, iceCreamTime, pizzaTime;
let state;
let timeNow, timePassed;
let foodX, foodY;

// preloading images
function preload() {
  booRight = loadImage("images/booRight.png");
  booLeft = loadImage("images/booLeft.png");
  burger = loadImage("images/burger.png");
  cherries = loadImage("images/cherries.png");
  cookie = loadImage("images/cookie.png");
  iceCream = loadImage("images/iceCream.png");
  pizza = loadImage("images/pizza.png");
}

// canvas creation, assigning values to variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  booX = width / 2;
  booY = height / 2;
  speed = 5;
  rightOrLeft = 0;
  burgerTime = 3000;
  cherriesTime = 5000;
  cookieTime = 4000;
  iceCreamTime = 6000;
  pizzaTime = 3000;
  state = 4;
  timePassed = millis();
  foodX = random(0, windowWidth);
  foodY = random(0, windowHeight);
}

// function that draws things 60 times/second
function draw() {
  background(0);
  keyPressed();
  foodAppear();
  timeNow = millis();
}

// WASD control creation
function keyPressed() {
  if (key === "w" || key === "W") {
    booY -= speed;
    if (rightOrLeft === 0) {
      image(booLeft, booX, booY);
    } else {
      image(booRight, booX, booY);
    }
  }
  if (key === "s" || key === "S") {
    booY += speed;
    if (rightOrLeft === 1) {
      image(booRight, booX, booY);
    } else {
      image(booLeft, booX, booY);
    }
  }
  if (key === "a" || key === "A") {
    booX -= speed;
    image(booLeft, booX, booY);
    rightOrLeft = 0;
  }
  if (key === "d" || key === "D") {
    booX += speed;
    image(booRight, booX, booY);
    rightOrLeft = 1;
  }
}
// foodX = random(0, windowWidth);
// foodY = random(0, windowHeight);
// state = 2;
function foodAppear() {
  if (state === 1) {
    if (timeNow <= timePassed + burgerTime) {
      image(burger, foodX, foodY, 100, 100);
    }
  }
  else if (state === 2) {
    if (timeNow <= timePassed + cherriesTime) {
      image(cherries,foodX,foodY,100,100);
    }
  }
  else if (state === 3) {
    if (timeNow <= timePassed + cookieTime) {
      image(cookie,foodX,foodY,100,100);
    }
  }
  else if (state === 4) {
    if (timeNow <= timePassed + iceCreamTime) {
      image(iceCream,foodX,foodY,100,100);
    }
    if (timeNow >= timePassed + iceCreamTime) {
      print("success");
      foodX = random(0, windowWidth);
      foodY = random(0, windowHeight);
      state = 2;
      // find a way to add in time stuff
    }
  }
  else if (state === 5) {
    if (timeNow <= timePassed + pizzaTime) {
      image(pizza,foodX,foodY,100,100);
    }
  }
}

// one food at a time appears for n seconds in random locations and boo must catch as many as possible in a limited amount of time.
