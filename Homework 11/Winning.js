var x = 50;

var y = 50;

var diameter = 25;

var mousex = -10;

var mousey = -10;

var UD = 500;

var LR = 400;

var MC = 0;

var X = 0;

var Y = 0;

var D = 25;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0);
    fill(120, 30, 49);
    circle(x, y, diameter);

    if (x <= 400) {
        x += 10;
    } else if (x > 400 && x <= 800) {
        x += 2;
    } else if (x >= 801) {
        x = 0;
    }

    if (y <= 300) {
        y += 3;
    } else if (y > 300 && y <= 600) {
        y += 2;
    } else if (y >= 601) {
        y = 0; 
    }

    if (diameter <= 100) {
        diameter += 4;
    } else if (diameter > 100 && diameter <= 150) {
        diameter += 2;
    } else if (diameter > 150) {
        diameter = 25;
    }

    fill(0,0,240);
    circle(X, Y, D);

    if (X <= 400) {
        X += 11;
    } else if (X > 400 && X <= 800) {
        X += 20;
    } else if (X >= 801) {
        X = 0;
    }

    if (Y <= 300) {
        Y += 1;
    } else if (Y > 300 && Y <= 600) {
        Y += 43;
    } else if (y >= 601) {
        Y = 0; 
    }

    if (D <= 100) {
        D += 2;
    } else if (D > 100 && D <= 150) {
        D += 10;
    } else if (D > 150) {
        D = 60;
    }
    
    fill(200, 100, 20);
    ellipse(mousex, mousey, 15, 50);

    fill(250, 0, 0);
    circle(LR, UD, 50);

    if (keyIsDown(68)) {
        LR+=5;
    }   else if (keyIsDown(65)) {
        LR-=5;
    }

    if (keyIsDown(87)) {
        UD-=5;
    } else if (keyIsDown(83)) {
        UD+=5;
    }

    fill(10,5000,10)
    rect(200, 0, 400, 40)

    fill(0,0,0)
    textSize(32);
    textAlign(CENTER, CENTER);
    text("WIN", width / 2, height / 28);

    if (LR > 200 && LR < 600 && UD - 25 <= 40 && UD + 25 >= 0) {
        console.log("You Have Won The Game");
    }
}

function mouseClicked() {
    mousex = mouseX;
    mousey = mouseY;
}