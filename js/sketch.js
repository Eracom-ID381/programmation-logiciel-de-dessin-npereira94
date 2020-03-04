function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);


}

function draw() {

  if (mouseIsPressed && mouseY > height / 2) {
    ellipse(mouseX, mouseY, 50, 50);
  } else {
    stroke(255)
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  /*if (mouseIsPressed) {
      stroke(255, 23, 40);
      strokeWeight(10);
      if (mouseY > height / 2) {
        fill(255, 23, 40);
        noStroke();
        circle(mouseX, mouseY, 10, 10);
      } else {
        line(mouseX, mouseY, pmouseX, pmouseY);
      }
    }*/

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}