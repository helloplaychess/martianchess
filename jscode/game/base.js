//0 = empty
//1 = pawn
//2 = drone
//3 = queen
var defaultBoard = [
  [3, 3, 2, 0],
  [3, 2, 1, 0],
  [2, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 1, 2],
  [0, 1, 2, 3],
  [0, 2, 3, 3]
];

var move = {
  location: [],
  destination: [],
  pieceType: 0,
  scoreChangeTop: 0,
  scoreChangeBottom: 0
}

var gameState = {
  currentBoard: Object.create(defaultBoard),
  currentTurn: 1, //0 = top // 1 = bottom
  scoreTop: 0,
  scoreBottom: 0,
  legalMoves: function(){
    var legals = [];
    //legal Move generation

    for (let i = 0; i < 4; i++){
      for (let j = 0; j < 8; j++){
        if(this.currentBoard[j][i] != 0){ //cell has piece

          if((this.currentTurn == 0 && j < 4 ) || this.currentTurn == 1 && j > 3){
            if(this.currentBoard[j][i] == 1){ //cell has pawn

              if(i != 3 && j != 7){ //cell is not on right or bottom edge(can move to bottom right)
                pseudoMove = Object.create(move);
                pseudoMove.location = [i, j];
                pseudoMove.destination = [i+1, j+1];
                pseudoMove.pieceType = this.currentBoard[j][i];
                if(this.currentBoard[j+1][i+1] == 0){ //destination cell is empty
                  legals.push(pseudoMove);
                }else if(this.currentBoard[j+1][i+1] != 0 && isCapture(j, j+1)){ //destination cell is not empty and can be captured
                  legals.push(pseudoMove);
                }

              }

              if(i != 0 && j != 7){ //cell is not on left or bottom edge(can move to bottom left)
                pseudoMove = Object.create(move);
                pseudoMove.location = [i, j];
                pseudoMove.destination = [i-1, j+1];
                pseudoMove.pieceType = this.currentBoard[j][i];
                if(this.currentBoard[j+1][i-1] == 0){ //destination cell is empty
                  legals.push(pseudoMove);
                }else if(this.currentBoard[j+1][i-1] != 0 && isCapture(j, j+1)){ //destination cell is not empty and can be captured
                  legals.push(pseudoMove);
                }

              }

              if(i != 3 && j != 0){ //cell is not on right or top edge(can move to top right)
                pseudoMove = Object.create(move);
                pseudoMove.location = [i, j];
                pseudoMove.destination = [i+1, j-1];
                pseudoMove.pieceType = this.currentBoard[j][i];
                if(this.currentBoard[j-1][i+1] == 0){ //destination cell is empty
                  legals.push(pseudoMove);
                }else if(this.currentBoard[j-1][i+1] != 0 && isCapture(j, j-1)){ //destination cell is not empty and can be captured
                  legals.push(pseudoMove);
                }

              }

              if(i != 0 && j != 0){ //cell is not on left or top edge(can move to top left)
                pseudoMove = Object.create(move);
                pseudoMove.location = [i, j];
                pseudoMove.destination = [i-1, j-1];
                pseudoMove.pieceType = this.currentBoard[j][i];
                if(this.currentBoard[j-1][i-1] == 0){ //destination cell is empty
                  legals.push(pseudoMove);
                }else if(this.currentBoard[j-1][i-1] != 0 && isCapture(j, j-1)){ //destination cell is not empty and can be captured
                  legals.push(pseudoMove);
                }

              }

            }else if(this.currentBoard[j][i] == 2){ //cell has drone



            }else if(this.currentBoard[j][i] == 3){ //cell has queen



            }
          }

        }
      }
    }

    //legal Move generation
    return legals;
  },
  execute: function(move){
    if(this.currentTurn == 0){
      this.currentTurn = 1;
    }else if(this.currentTurn == 1){
      this.currentTurn = 0;
    }
    this.currentBoard[move.location[1]][move.location[0]] = 0;
    this.currentBoard[move.destination[1]][move.destination[0]] = move.pieceType;
  }
};

function isCapture(a, b){ //a and b are the height (y coordinate)
  return !(a>3)==(b>3);
}

console.log("2: base.js has been loaded");
