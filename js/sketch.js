function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);


}

function draw() {

  /*if (mouseIsPressed && mouseY > height / 2) {
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    stroke(255)
    line(mouseX, mouseY, pmouseX, pmouseY);
  } */
  if (mouseIsPressed) {
    stroke(255, 23, 40);
    strokeWeight(40);
    if (mouseY > height / 2) {
      fill(50, 100, 250);
      noStroke();
      circle(mouseX, mouseY, 150, 150);
    } else {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  if (mousePressed) {

    strokeWeight(40);
    if (mouseY < height / 2) {
      fill(250);
      circle(mouseX, mouseY, 150, 150);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}