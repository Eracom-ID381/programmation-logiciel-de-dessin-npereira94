let mySound1;
let mySound2;
let mySound3;
let mySound4;
let mode = 0;



function preload() {
  // soundFormats('mp3', 'ogg');
  mySound1 = loadSound('audio/bebe.mp3');
  mySound2 = loadSound('audio/C2C.mp3');
  mySound3 = loadSound('audio/blue.mp3');
  mySound4 = loadSound('audio/rousse.mp3');
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
  text('Medusa', 50, 100);
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
        fill(random(0, 255), random(0, 255), 255);
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
      line(mouseX, mouseY, pmouseX, pmouseY);




      // Up Arrow
    } else if (mode === 2) {

      strokeWeight(1);
      stroke(random(0, 255), random(0, 255), 255);
      noFill();
      square(mouseX, height / 2, 12, width / 2);

      if (width > 200) {
        square(mouseX, mouseY, pmouseX, pmouseY);
      }

      // Down Arrow
    } else if (mode === 3) {


      if (mouseY < height / 2) {
        strokeWeight(2);
        stroke(255, 102, 0);
        noFill();
        curve(mouseX, mouseY, pmouseX, pmouseY, mouseX, 650, 150, pmouseY);
      } else {

        strokeWeight(2);
        stroke(255, 102, 0);
        noFill();
        curve(mouseX, mouseY, pmouseX, pmouseY, mouseX, mouseY, 10, pmouseY);
      }

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
    background(0);
  } else if (keyCode === UP_ARROW) {
    mode = 2;
    background(0);
  } else if (keyCode === DOWN_ARROW) {
    mode = 3;
    background(0);
  }

  if (keyCode === BACKSPACE) {
    background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}