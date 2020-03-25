let mySound;
let mode = 0;

function preload() {
  // soundFormats('mp3', 'ogg');
  mySound = loadSound('audio/bebe.mp3');
}


function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);

}

function draw() {

  strokeWeight(2);
  stroke(250);
  line(200, 1000, 200, 10);

  if (mouseIsPressed) {

    stroke(255);
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);

    if (mouseY < height / 2) {

      strokeWeight(1);
      fill(random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, width / 2, height / 2);
      stroke(255, 200, );

    }
  }
  // Default and Left Arrow
  if (mode === 0) {
    background(0);
    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, 2000, 10);
  }
  // Right Arrow
  else if (mode === 1) {

    background('#0f0');
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  // Up Arrow
  else if (mode === 2) {
    background(250, 0, 0);
    stroke(255);
    strokeWeight(2);
    square(mouseX, mouseY, pmouseX, pmouseY);


    // Down Arrow
  } else if (mode === 3) {

  }
}

function mousePressed() {
  mySound.play();
}

function mouseReleased() {
  mySound.pause();
}

function keyPressed() {
  mySound.stop();
  if (keyCode === LEFT_ARROW) {
    mode = 0;
  } else if (keyCode === RIGHT_ARROW) {
    mode = 1;
  } else if (keyCode === UP_ARROW) {
    mode = 2;
  } else if (keyCode === DOWN_ARROW) {
    mode = 3;
  }

  if (keyCode === BACKSPACE) {
    background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}