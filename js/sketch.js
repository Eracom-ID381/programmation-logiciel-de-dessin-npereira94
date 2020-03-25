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
  colorMode(HSB, 255);

}

function draw() {
  fill(random(0, 255), random(0, 255), 255);


  // Default and Left Arrow
  if (mode === 0) {
    if (MouseIsPressed) {

      strokeWeight(2);
      stroke(random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, 2000, 10);
    }
  }
  // Right Arrow
  else if (mode === 1) {
    if (MouseIsPressed) {

      strokeWeight(5);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
  // Up Arrow
  else if (mode === 2) {

    noFill();
    square(mouseX, mouseY, pmouseX, pmouseY);


    // Down Arrow
  } else if (mode === 3) {

  }
}

function MouseIsPressed() {
  strokeWeight(2);
  line(mouseX, mouseY, 2000, 10);

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