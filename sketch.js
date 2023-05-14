function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  stroke(0);
  touchMoved();
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
