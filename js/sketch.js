function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);



}

function draw() {





  if (mouseIsPressed) {
    stroke(255, 20, );
    strokeWeight(10);

    if (mouseY < height / 2) {
      (random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, width / 2, height / 2);
      fill(random(0, 255), random(0, 255), 255);
      stroke(255, 200, );
      strokeWeight(1);
    }
  }
}


function mouseClicked() {
  ellipse(mouseX, mouseY, 5, 5);
  // prevent default
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}