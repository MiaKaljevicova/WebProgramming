//The setup function only happens once

function setup() {
  createCanvas(750, 500, WEBGL); //create a 500px X 500px canvas
  noStroke();
}

//The draw function happens over and over again
function draw() {
  background(128, 128, 128); //an RGB color for the canvas' background
  //circle
  // Pink point light on the right
  pointLight(255,51,153,500,0,200);
  
  // Purple directional light from the left
  directionalLight(172,0,230,-1,0,0);

  // Yellow spotlight from the front
  pointLight(255,255,109,0,0,300);

  rotateY(map(mouseX,0,width,0,PI));
  rotateX(map(mouseY,0,height,0,PI));
  box(200);  
}








