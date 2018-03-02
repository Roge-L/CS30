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
let timePassed;
let state;
let foodX, foodY;
let points;
let layer;

// preloading images
function preload() {
  booRight = loadImage("images/booRight.png");
  booLeft = loadImage("images/booLeft.png");
  burger = loadImage("images/burger.png");
  cherries = loadImage("images/cherries.png");
  cookie = loadImage("images/cookie.png");
  iceCream = loadImage("images/iceCream.png");
  pizza = loadImage("images/pizza.png");
  vidGameFont = loadFont("assets/INVASION2000.ttf");
}

// canvas creation, assigning values to variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  booX = width / 2;
  booY = height / 2;
  speed = 10;
  rightOrLeft = 0;
  burgerTime = 3000;
  cherriesTime = 4000;
  cookieTime = 2000;
  iceCreamTime = 3000;
  pizzaTime = 2000;
  state = 1;//int(random(1,6));
  foodX = random(300,width - 300);
  foodY = random(300,height - 300);
  timePassed = 0;
  points = 0;
  layer = 1;
}

// function that draws things 60 times/second
function draw() {
  background(0);
  keyPressed();
  checkState();

  // if left mouse is pressed, boo accelerates
  if (mouseIsPressed) {
    speed += 1;
  }
  else {
    speed = 10;
  }

  let d = dist(booX, booY, foodX, foodY);

  // 59 is the boo's image height divided by 2 and 50 is each food's width or height divided by 2
  // these numbers are like radii, if the distance between them are smaller than their radii combined then they are touching
  if (d < 59  + 50) {
      points += 1;
      newFood();
    }
    texts();
}

function texts() {
  textSize(86);
  textFont(vidGameFont);
  fill(255);
  text("Points: " + points,80,200);
  text("Time Remaining: " + 60, 80, 110);
}

// WASD control creation
// if other keys are pressed boo the ghost goes invisible and stops in his position, this was definitely intentional
function keyPressed() {
  if (key === "w" || key === "W") {
    booY -= speed;
    if (rightOrLeft === 0) {
      image(booLeft, booX, booY);
    }
    else {
      image(booRight, booX, booY);
    }
  }
  if (key === "s" || key === "S") {
    booY += speed;
    if (rightOrLeft === 1) {
      image(booRight, booX, booY);
    }
    else {
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

function startGame() {
  layer = 2;
}

// function that changes to another food
function newFood() {
  state = int(random(1,6));
  timePassed = millis();
  foodX = random(300,width - 300);
  foodY = random(300,height - 300);
}

// function that draws burger for an amount of time
function drawBurger() {
  if (millis() <= timePassed + burgerTime) {
    image(burger,foodX,foodY,[100],[100]);
  }
  else {
    newFood();
  }
}

// function that draws cherries for an amount of time
function drawCherries() {
  if (millis() <= timePassed + cherriesTime) {
    image(cherries,foodX,foodY,[100],[100]);
  }
  else {
    newFood();
  }
}

// function that draws cookie for an amount of time
function drawCookie() {
  if (millis() <= timePassed + cookieTime) {
    image(cookie,foodX,foodY,[100],[100]);
  }
  else {
    newFood();
  }
}

// function that draws ice cream for an amount of time
function drawIceCream() {
  if (millis() <= timePassed + iceCreamTime) {
    image(iceCream,foodX,foodY,[100],[100]);
  }
  else {
    newFood();
  }
}

// function that draws pizza for an amount of time
function drawPizza() {
  if (millis() <= timePassed + pizzaTime) {
    image(pizza,foodX,foodY,[100],[100]);
  }
  else {
    newFood();
  }
}

// function that checks the state
function checkState() {
  if (state === 1) {
    drawBurger();
  }
  else if (state === 2) {
    drawCherries();
  }
  else if (state === 3) {
    drawCookie();
  }
  else if (state === 4) {
    drawIceCream();
  }
  else if (state === 5) {
    drawPizza();
  }
}


// one food at a time appears for n seconds in random locations and boo must catch as many as possible in a limited amount of time. when mous clicked get speed boost
