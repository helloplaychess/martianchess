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

var gameState = {
  currentBoard: Object.create(defaultBoard)
};



console.log("2: base.js has been loaded");
