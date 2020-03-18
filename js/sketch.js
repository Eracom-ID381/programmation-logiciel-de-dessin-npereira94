function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);
  colorMode(HSB, 255);




}

function draw() {

  if (mouseIsPressed) {
    stroke(255);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }
}

function keyPressed() {

  if (keyCode === BACKSPACE) {
    background(0);
  }
  if (keyCode === LEFT_ARROW) {
    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, 2000, 10);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}