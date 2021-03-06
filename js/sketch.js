let mySound1;
let mySound2;
let mySound3;
let mySound4;
let mode = 0;



function preload() {
  soundFormats('mp3', 'ogg');
  mySound1 = loadSound('./audio/Bebe.mp3');
  mySound2 = loadSound('./audio/C2C.mp3');
  mySound3 = loadSound('./audio/blue.mp3');
  mySound4 = loadSound('./audio/rousse.mp3');
}


function setup() {

  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);


}

function draw() {
  stroke(0);
  textSize(10);
  text('Medusa', 50, 100);
  text('Down the road', 50, 180);
  text('Rousse', 50, 260);
  text('Blue World', 50, 340);

  stroke(255);
  textSize(32);
  text('Let the music guide your hand', 1200, 100);
  fill(0, 102, 153);

  if (mouseIsPressed) {


    // Default and Left Arrow
    if (mode === 0) {


      if (mouseY < height / 2) {

        stroke(255, 200, );
        strokeWeight(1);
        line(mouseX, mouseY, width / 2, height / 2);

      } else {

        stroke(255, 100, 200);
        strokeWeight(1);
        fill("pink");
        line(mouseX, mouseY, width / 2, height / 2);
      }



      // Right Arrow
    } else if (mode === 1) {


      strokeWeight(5);
      stroke(255, 0, 10, 0.3);
      triangle(mouseX, mouseY, 100, 10, 78, 30);



      // Up Arrow
    } else if (mode === 2) {


      strokeWeight(1);
      stroke(random(0, 255), random(0, 255), 255);
      noFill();
      circle(mouseX, mouseY, pmouseX, pmouseY);


      // Down Arrow
    } else if (mode === 3) {

      noFill();
      strokeWeight(1);
      stroke(230, 120, 0);
      bezier(mouseX, mouseY, pmouseX, pmouseY, 1000, 1000, 100, 500, 200, 400, 100, 400);

    }
  }
}


function mousePressed() {
  if (mode === 0) {
    mySound1.play();
  } else if (mode === 1) {
    mySound2.play();
  } else if (mode === 2) {
    mySound3.play();
  } else if (mode === 3) {
    mySound4.play();
  }
}

function mouseReleased() {
  if (mode === 0) {
    mySound1.pause();
  } else if (mode === 1) {
    mySound2.pause();
  } else if (mode === 2) {
    mySound3.pause();
  } else if (mode === 3) {
    mySound4.pause();
  }
}

function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    mode = 0;
    background(0);
  } else if (keyCode === RIGHT_ARROW) {
    mode = 1;
    background(200, 100, 10);
  } else if (keyCode === UP_ARROW) {
    mode = 2;
    background(0);
  } else if (keyCode === DOWN_ARROW) {
    mode = 3;
    background(0);
  }
  if (keyCode === ENTER) {
    save = cnv;
  }
  if (keyCode === BACKSPACE) {
    background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}