function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {

  fill(random(0, 255), random(0, 255), 255);
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function mousePressed() {


  ellipse(mouseX, mouseY, mouseX, mouseY);


}