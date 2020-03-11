function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  let value = 0;


}

function draw() {

  fill(random(0, 255), random(0, 255), 255);
  line(0, mouseY, width, 100);
  fill(255);
  if (mouseIsPressed) {
    stroke(255);
    strokeWeight(10);
    if (mouseY > height / 2) {
      fill(255, 255, 40);
      noStroke();
      circle(mouseX, mouseY, 150, 150);
    } else {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}
/*
function mouseClicked() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}*/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}