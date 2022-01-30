var canvasScaling = 1

function setup() {
  var canvas = createCanvas(canvasScaling*600, canvasScaling*1200);
  canvas.parent("super");
}

function draw() {
  background(191, 191, 191)
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 4; j++){
      noStroke();
      fill(63, 63, 63);
      rect(j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      fill(127, 127, 127);
      rect(j*canvasScaling*150+canvasScaling*25, i*canvasScaling*150+canvasScaling*25, canvasScaling*100, canvasScaling*100);
      //console.log(i*150, j*150, i*150+150, j*150+150);
      //replace this with images
    }
  }
}

function mouseClicked() {
  selectedX = Math.floor(mouseX/150*canvasScaling);
  selectedY = Math.floor(mouseY/150*canvasScaling);
  if(selectedX >= 0 && selectedX <= 3 && selectedY >= 0 && selectedY <= 7){
    console.log("inside");
  }
  console.log(selectedX, selectedY)
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 4; j++){
      //(j*150, i*150, j*150+150, i*150+150);
    }
  }
}

console.log("1: master.js has been loaded");
