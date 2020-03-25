let mySound = 0;
let mode = 0;



function preload() {
  // soundFormats('mp3', 'ogg');
  mySound = loadSound('audio/bebe.mp3');
  mySound + 1 = loadSound('audio/C2C.mp3');
}


function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);
  colorMode(HSB, 255);

}

function draw() {
  stroke(255);
  textSize(32);
  text('Let the music guide your hand', 1200, 100);
  fill(0, 102, 153);

  if (mouseIsPressed) {

    // Default and Left Arrow
    if (mode === 0) {

      strokeWeight(2);
      stroke(random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, 2000, 10);
      mySound()


      // Right Arrow
    } else if (mode === 1) {

      strokeWeight(5);
      line(mouseX, mouseY, pmouseX, pmouseY);

      // Up Arrow
    } else if (mode === 2) {

      noFill();
      square(mouseX, mouseY, pmouseX, pmouseY);

      // Down Arrow
    } else if (mode === 3) {

      stroke(255, 102, 0);
      curve(73, 24, 73, 61, 15, 65, 15, 65);
    }
  }
}


function mousePressed() {
  mySound.play();
}

function mouseReleased() {
  mySound.pause();
}

function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    mode = 0;
    mySound = 0;
  } else if (keyCode === RIGHT_ARROW) {
    mode = 1;
    mySound = 1;
  } else if (keyCode === UP_ARROW) {
    mode = 2;
    mySound = 2;
  } else if (keyCode === DOWN_ARROW) {
    mode = 3;
    mySound = 3;
  }

  if (keyCode === BACKSPACE) {
    background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}