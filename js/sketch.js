function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
}

function draw() {



  stroke(255);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else {
    rect(25, 25, 50, 50);
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}