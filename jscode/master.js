var canvasScaling = 1;
let pawnImage;
let droneImage;
let queenImage;
let emptyImage;

let designs = 1; //more will be added later

function preload() {
  for (let i = 1; i < designs+1; i++){
    var path1 = "images/" + i + "." + "pawn.png";
    var path2 = "images/" + i + "." + "drone.png";
    var path3 = "images/" + i + "." + "queen.png";
    pawnImage = loadImage(path1);
    console.log(path1 + " has been loaded");
    droneImage = loadImage(path2);
    console.log(path2 + " has been loaded");
    queenImage = loadImage(path3);
    console.log(path3 + " has been loaded");
  }
  emptyImage = loadImage("images/1.empty.png");
  console.log("images/1.empty.png has been loaded");
}

function setup() {
  var canvas = createCanvas(canvasScaling*600, canvasScaling*1200);
  canvas.parent("super");
}

function draw() {
  background(191, 191, 191)
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 4; j++){

      let tType = gameState.currentBoard[i][j];

      //noStroke();
      //fill(63, 63, 63);
      if(tType == 0){
        image(emptyImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }else if(tType == 1){
        image(pawnImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }else if(tType == 2){
        image(droneImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }else if(tType == 3){
        image(queenImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }
      //rect(j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);

      //fill(127, 127, 127);
      //rect(j*canvasScaling*150+canvasScaling*25, i*canvasScaling*150+canvasScaling*25, canvasScaling*100, canvasScaling*100);
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
