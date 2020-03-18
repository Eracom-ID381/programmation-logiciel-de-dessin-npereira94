function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectWidth = width / 4;
  cursor(CROSS);


}

function draw() {

  if (mouseIsPressed) {
    stroke(255, 100, );
    strokeWeight(2);

    if (mouseY < height / 4) {
      line(mouseX, mouseY, 10, mouseY);
      strokeWeight(2);
    }
    if (mouseY > height / 4) {
      stroke(random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, mouseY, 2);
      strokeWeight(1);
    }
  }
}


function mouseClicked() {


  if (mouseY < height / 4) {
    noFill();
    stroke(0, 255, 255);
    circle(500, 500, 400, 400, mouseX, mouseY, 50, 50);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}


function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
  } else {
    // It's a letter key, fill a rectangle
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    rect(x, 0, rectWidth, height);
  }
}