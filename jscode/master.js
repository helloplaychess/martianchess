function setup() {
  var canvas = createCanvas(600, 1200);
  canvas.parent("super");
}

function draw() {
  background(191, 191, 191)
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 4; j++){
      noStroke();
      fill(63, 63, 63);
      rect(j*150, i*150, 150, 150)
      fill(127, 127, 127);
      rect(j*150+25, i*150+25, 100, 100)
      //console.log(i*150, j*150, i*150+150, j*150+150);
      //replace this with images
    }
  }


}

console.log("1: master.js has been loaded")
