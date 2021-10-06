function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  noStroke();
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);

  fill(255)
  strokeWeight(1);
  stroke(250,170,201);
  triangle(0,108,106,108,106,0);

  fill(255);
  textSize(32);
  textFont("serif");
  strokeWeight(1)
  stroke(250,170,201)
  text("46", 68, 100);
}
