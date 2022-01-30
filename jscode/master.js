var canvasScaling = 1;
let pawnImage;
let droneImage;
let queenImage;
let emptyImage;

let designs = 1; //more will be added later

//move selection + piece highlighting
let sB = false;
let sX;
let sY;
let moveLocation = [0, 0];
let moveDestination = [0, 0];

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
  canvas.parent("canvas");
}

function draw() {
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 4; j++){
      let tType = gameState.currentBoard[i][j];
      if(tType == 0){
        image(emptyImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }else if(tType == 1){
        image(pawnImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }else if(tType == 2){
        image(droneImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }else if(tType == 3){
        image(queenImage, j*canvasScaling*150, i*canvasScaling*150, canvasScaling*150, canvasScaling*150);
      }
      if(sB == true && i == sY && j == sX){
        stroke(255, 0, 0);
        noFill();
        strokeWeight(6);
        rect(j*canvasScaling*150+3, i*canvasScaling*150+3, canvasScaling*150-6, canvasScaling*150-6);
      }
    }
  }
  document.getElementById("scoreTopParagraph").innerHTML = gameState.scoreTop;
  document.getElementById("scoreBottomParagraph").innerHTML = gameState.scoreBottom;

}

function mouseClicked() {
  selectedX = Math.floor(mouseX/150*canvasScaling);
  selectedY = Math.floor(mouseY/150*canvasScaling);
  if(selectedX >= 0 && selectedX <= 3 && selectedY >= 0 && selectedY <= 7){
    //a cell was pressed
    if(sB == true){
      sB = false;
      moveDestination[0] = selectedX;
      moveDestination[1] = selectedY;

      var selectedMove;
      let legalMoves = gameState.legalMoves();
      for (let i = 0; i < legalMoves.length; i++){

        if(legalMoves[i].location[0] == moveLocation[0] && legalMoves[i].location[1] == moveLocation[1] && legalMoves[i].destination[0] == moveDestination[0] && legalMoves[i].destination[1] == moveDestination[1]){

          gameState.execute(legalMoves[i]);

        }

      }

    }else if(sB == false){
      sX = selectedX;
      sY = selectedY;
      if(gameState.currentBoard[selectedY][selectedX] != 0){
        sB = true;
        moveLocation[0] = selectedX;
        moveLocation[1] = selectedY;
      }
    }
  }
}

console.log("1: master.js has been loaded");
