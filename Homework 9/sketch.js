  function setup() {
    createCanvas(300, 500);
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
    circle(175, 150, 25)
    circle(115, 150, 25)
    fill(200, 50, 0); // Front Hair
    circle(150,100,75);
    circle(120,100,75);
    circle(95,112,75);
    circle(185,100,75);
    circle(200,112,75);
    fill(180, 150, 120); // Nose
    triangle(140,190,150,175,160,190)
    fill(0) //Mouth
    line(190, 190, 120, 210);
    fill(0); //Title
    text('A Little Late But We Got Here', 140, 495);
}
