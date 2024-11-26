var x = 50;
var y = 50;
var diameter = 25;

var mousex = -10;
var mousey = -10;

var UD = 500;
var LR = 400;
var MC = 0;

var myXs = []; 
var myYs = []; 
var myDiameters = [];

var outer_blue = [];
var outer_green = [];
var outer_red = [];

var inner_blue = [];
var inner_green = [];
var inner_red = [];

var random_x_speed = []; 
var random_y_speed = []; 


function setup() {
  createCanvas(800, 600);

  for (var i = 0; i < 5; i++) {
    myXs[i] = getRandomNumber(800); 
    myYs[i] = getRandomNumber(600); 
    myDiameters[i] = getRandomNumber(100);
    
    outer_blue[i] = getRandomNumber(250); 
    outer_green[i] = getRandomNumber(250);
    outer_red[i] = getRandomNumber(250);
    
    inner_blue[i] = getRandomNumber(250);
    inner_green[i] = getRandomNumber(250);
    inner_red[i] = getRandomNumber(250);

    random_x_speed[i] = getRandomNumber(10) + 1;
    random_y_speed[i] = getRandomNumber(10) + 1;
  }
}

function draw() {
  background(0);

  mouseShape();
  
  player();
  
  movePlayer();
  
  exit();
  
  winMessage();
  
  Border();

  
  for (var i = 0; i < myXs.length; i++) {
    myXs[i] += random_x_speed[i];

    if (myXs[i] - myDiameters[i] / 2 > width) {
        myXs[i] = -myDiameters[i] / 2;
    }

    myYs[i] += random_y_speed[i];

    if (myYs[i] - myDiameters[i] / 2 > height) {
        myYs[i] = -myDiameters[i] / 2;
    } else if (myYs[i] + myDiameters[i] / 2 < 0) {
        myYs[i] = height + myDiameters[i] / 2;
    }

    ConcentricCircle(
        myXs[i],
        myYs[i],
        myDiameters[i],
        myDiameters[i] / 2,
        outer_blue[i],
        outer_green[i],
        outer_red[i],
        inner_blue[i],
        inner_green[i],
        inner_red[i]
    );
  }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function ConcentricCircle(
    x,
    y,
    outer_diameter,
    inner_diameter,
    outer_red,
    outer_green,
    outer_blue,
    inner_red,
    inner_green,
    inner_blue
) {
    fill(outer_red, outer_green, outer_blue);
    circle(x, y, outer_diameter);
    fill(inner_red, inner_green, inner_blue);
    circle(x, y, inner_diameter);
}

function mouseShape() {
    fill(200, 100, 20);
    ellipse(mousex, mousey, 15, 50);
}

function player() {
    fill(250, 0, 0);
    circle(LR, UD, 50);
}

function movePlayer() {
    if (keyIsDown(68)) {
        LR += 5;
    } else if (keyIsDown(65)) {
        LR -= 5;
    }

    if (keyIsDown(87)) {
        UD -= 5;
    } else if (keyIsDown(83)) {
        UD += 5;
    }
}

function exit() {
    fill(10, 5000, 10);
    rect(200, 0, 400, 40);

    fill(0, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("WIN", width / 2, height / 28);
}

function winMessage() {
    if (LR > 200 && LR < 600 && UD - 25 <= 40 && UD + 25 >= 0) {
    console.log("You Have Won The Game");
    }
}

function Border() {
    fill(128, 128, 128);
    rect(0, 0, 5, 600);
    rect(795, 0, 5, 600);
    rect(0, 0, 200, 5);
    rect(0, 595, 800, 5);
    rect(600, 0, 200, 5);
}

function mouseClicked() {
  
    mousex = mouseX;
    mousey = mouseY;
}