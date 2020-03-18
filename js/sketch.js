function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectWidth = width / 4;
  cursor(CROSS);
  colorMode(HSB, 255);


}

function draw() {

  if (mouseIsPressed) {
    stroke(255, 100, );
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

    if (mouseY < height / 2) {
      strokeWeight(2);
      line(mouseX, mouseY, 0, 0);

    }
    if (mouseY > height / 2) {
      strokeWeight(2);
      stroke(random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, 2000, 10);
    }
  }
}

function mouseClicked() {


  if (mouseIsPressed) {
    stroke(255, 100, );
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped() {
  if (key === 'a') {
    background = 255, 30, 10;
  } else if (key === 'b') {
    value = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}