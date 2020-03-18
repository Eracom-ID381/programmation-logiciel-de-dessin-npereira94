function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);
  colorMode(HSB, 255);


}

function draw() {

  if (mouseIsPressed) {

    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

    if (mouseY > height / 2) {
      strokeWeight(2);
      stroke(random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, 2000, 10);
    }
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(0);
  }
  if (keyCode === A) {
    strokeWeight(2);
    line(mouseX, mouseY, 0, 0);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}