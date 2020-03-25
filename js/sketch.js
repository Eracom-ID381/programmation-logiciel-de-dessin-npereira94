let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('audio/Bullit.mp3');
}


function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);
  text('tap here to play', 100, 200);

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
      (random(0, 255), random(0, 255), 255);
      line(mouseX, mouseY, width / 2, height / 2);
      fill(random(0, 255), random(0, 255), 255);
      stroke(255, 200, );
      strokeWeight(1);
    }
  }
  /*Normal Mode*/

  if (keyCode === LEFT_ARROW) {
    background(0);
    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, 2000, 10);
    mySound.play();
  } else {

    mySound.stop();

  }
  /*StrokeWeight*/

  if (keyCode === RIGHT_ARROW) {
    background(0);
    background('#0f0');
    strokeWeight(5);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }
  /*Christmas Mode*/
  if (keyCode === DOWN_ARROW) {
    background(250, 0, 0);
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