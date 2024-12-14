var x = 50;
var y = 50;
var diameter = 25;

var win = 0;
var numCircles = 1;
var point = 0;

var mousex = -10;
var mousey = -10;

var UD = 500;
var LR = 400;

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

var exitZoneEntered = false; 

var timeLimit = 11;  
var timeRemaining = timeLimit;  
var timerStarted = false; 
var lastTime = 0;

var highScore = 0;

function setup() {
  createCanvas(800, 600);
  generateCircles(numCircles);
  lastTime = millis();
}

function draw() {
    background(0);

    if (!timerStarted) {
        lastTime = millis();
        timerStarted = true;
    }
    
    var currentTime = millis();
    var elapsedTime = (currentTime - lastTime) / 1000;
    
    timeRemaining -= elapsedTime;
    
    lastTime = currentTime;
    
    if (timeRemaining < 0) {
        timeRemaining = 0;
    }
    
    player();
    
    movePlayer();

    winMessage();
    
    exit();
    
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
  
      if (checkCollision(LR, UD, myXs[i], myYs[i], myDiameters[i])) {
        point = 0;
        LR = 400;
        UD = 500;
        numCircles = 1;
        generateCircles(numCircles);
        break;
      }
    }
  
    displayScore(); 
    displayHighScore();

    if (timeRemaining <= 0) {
        gameOver();
    } else {
        displayTime();
    }
}

function displayHighScore() {
    fill(255);
    textSize(32);
    textAlign(LEFT, TOP);
    text("Best: " + highScore, 10, 10);
}

function winMessage() {
    var inExitZone = LR > 200 && LR < 600 && UD - 25 <= 40 && UD + 25 >= 0;
  
    if (inExitZone && !exitZoneEntered) {
      point++; 
      numCircles++; 
      generateCircles(numCircles);
      LR = 400;
      UD = 500;
  
      timeRemaining = timeLimit;
      if (point > highScore) {
        highScore = point;
      }  
      
      exitZoneEntered = true;
    }

    if (!inExitZone) {
      exitZoneEntered = false;
    }
}

function displayTime() {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Time Left: " + Math.max(0, Math.floor(timeRemaining)) + "s", width / 2, height / 6);
}

function gameOver() {
    fill(255, 0, 0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2);
  
    setTimeout(function() {
      resetGame();
    }, 3000);
}

function resetGame() {
    point = 0;
    numCircles = 1;
    timeRemaining = timeLimit;
    timerStarted = false;
  
    generateCircles(numCircles);
    LR = 400;
    UD = 500;
}

function checkCollision(playerX, playerY, circleX, circleY, circleDiameter) {
    var distance = dist(playerX, playerY, circleX, circleY);
  
    var playerRadius = 25;
    var circleRadius = circleDiameter / 2;
  
    return distance < (playerRadius + circleRadius);
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 10;
}

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
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

function player() {
    fill(250, 0, 0);
    circle(LR, UD, 50);
}

function movePlayer() {
    if (keyIsDown(65) && LR - 25 > 5) {
        LR -= 5;
    }

    if (keyIsDown(68) && LR + 25 < 795) {
        LR += 5;
    }

    if (keyIsDown(87) && UD - 25 > 5) {
        UD -= 5;
    }

    if (keyIsDown(83) && UD + 25 < 595) {
        UD += 5;
    }

    if (UD - 25 < 5 && LR > 0 && LR < width) {
        UD = 25;
    }
    
    if (UD + 25 > 595 && LR > 0 && LR < width) {
        UD = 595 - 25;
    }
}

function exit() {
    fill(10, 5000, 10); 
    rect(200, 0, 400, 40);

    fill(0, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Exit", width / 2, height / 28);
}

function displayScore() {
    if (isNaN(point)) {
        point = 0;
    }

    fill(255);
    textSize(32);
    textAlign(RIGHT, TOP);
    text("Score: " + point, width - 20, 20);
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

function generateCircles(num) {

    myXs = [];
    myYs = [];
    myDiameters = [];
    outer_blue = [];
    outer_green = [];
    outer_red = [];
    inner_blue = [];
    inner_green = [];
    inner_red = [];
    random_x_speed = [];
    random_y_speed = [];
  
    for (var i = 0; i < num; i++) {
      var newX, newY;
  
      var overlap = true;
  
      while (overlap) {

        newX = getRandomNumber(800); 
        newY = getRandomNumber(300);  
  
        var distToPlayer = dist(newX, newY, LR, UD);
  
        if (distToPlayer > 150) { 
          overlap = false; 
        }
      }
  
      myXs[i] = newX;
      myYs[i] = newY;
      myDiameters[i] = getRandomNumber(100);
  
      outer_blue[i] = getRandomNumber(250); 
      outer_green[i] = getRandomNumber(250);
      outer_red[i] = getRandomNumber(250);
  
      inner_blue[i] = getRandomNumber(250);
      inner_green[i] = getRandomNumber(250);
      inner_red[i] = getRandomNumber(250);

      random_x_speed[i] = (Math.random() * 4 - 2) * 1;
      random_y_speed[i] = (Math.random() * 4 - 2) * 1;  
    }
}

