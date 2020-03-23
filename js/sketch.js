let osc, freq, amp;
osc = new p5.Oscillator('square');
let mySound

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);
  colorMode(HSB, 255);




}

function draw() {
  freq = map(mouseX, 0, width, 100, 1000);
  amp = map(mouseY, 0, height, 0, 1);

  if (mouseIsPressed) {
    stroke(255);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

    osc.start();

  }
  if (keyCode === LEFT_ARROW) {
    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), 255);
    line(mouseX, mouseY, 2000, 10);

  }
  if (keyCode === RIGHT_ARROW) {
    stroke(10, 20, 200);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }
  if (keyCode === DOWN_ARROW) {
    stroke(255);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }
}

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/doorbell');
}

function mouseReleased() {
  osc.stop();
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