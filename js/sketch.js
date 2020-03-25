let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('audio/bebe');
}


function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  text('tap here to play', 10, 20);
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

  }
  /*Normal Mode*/

  if (keyCode === LEFT_ARROW) {

    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, 2000, 10);
    mySound.play();
  } else {

    mySound.stop();

  }
  /*Kid Mode*/

  if (keyCode === RIGHT_ARROW) {

    background('#0f0');
    strokeWeight(5);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }

  if (keyCode === DOWN_ARROW) {
    stroke(255);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }
  if (keyCode === ENTER) {


  }
}


function keyPressed() {

  if (keyCode === BACKSPACE) {
    background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}