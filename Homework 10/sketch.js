
var Lpuple = 115;
var Rpuple = 175;
var SpupleR = 1;
var SpupleL = 1;
var Btriangle = 190;
var Striangle = .2;
var TRlineX = 190;
var TRlineY = 190;
var BLlineX = 120;
var BLlineY = 210;
var Sline = .5;
var textSizeFactor = 30;
var textSizeDirection = 1;
var textSizeSpeed = 0.5;

function setup() {
    createCanvas(300, 500);
    SpupleL = floor(random() * 3);
    SpupleR = floor(random() * 3);
    Striangle = floor(random() * 3);
}

function draw(head) {
    background(220)
    console.log("hi");
    fill(200, 50, 0); // Back hair
    circle(100,97,100);
    circle(100,150,100);
    circle(190,150,100);
    circle(150,100,100);
    circle(200,99,100);
    fill(240, 220, 190); // Head
    circle(150, 150, 150);
    fill(100, 110, 187); // Shirt
    rect(75,230,150,270);
    fill(255); // Eyes
    circle(120, 150, 50);
    circle(180, 150, 50);
    fill(0); // Puples
    circle(Lpuple, 150, 25)
    if (Lpuple >= 130 || Lpuple <= 110) {
      SpupleL *= -1;
    }
    Lpuple += SpupleL;

    circle(Rpuple, 150, 25);
    if (Rpuple >= 190 || Rpuple <= 170) 
    {
      SpupleR *= -1;
    }
    Rpuple += SpupleR;
  
    fill(200, 50, 0); // Front Hair
    circle(150,100,75);
    circle(120,100,75);
    circle(95,112,75);
    circle(185,100,75);
    circle(200,112,75);
    fill(180, 150, 120); // Nose
    triangle(140,Btriangle,150,175,160,Btriangle)
    if (Btriangle >= 191 || Btriangle <= 180) {
      Striangle *= -1;
    }
    Btriangle += Striangle;

    fill(0) //Mouth
    line(TRlineX, TRlineY, BLlineX, BLlineY);
    if (TRlineX >= 195 || TRlineX <= 184) {
      Sline *= -1;
    }
    TRlineX += Sline;
    TRlineY += Sline;
    BLlineX += Sline;
    BLlineY += Sline;
    
    textSize(textSizeFactor);
    fill(0); //Title
    text('Uh Oh', 0, 495);

    textSizeFactor += textSizeDirection * textSizeSpeed;

    if (textSizeFactor >= 100) {
      textSizeDirection = -1;
  } else if (textSizeFactor <= 30) {
      textSizeDirection = 1;
  }
}