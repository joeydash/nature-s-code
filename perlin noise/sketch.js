

var tx,ty;
function setup() {
  createCanvas(600,600);
  frameRate(10);
  tx=random(1);
  ty=random(1);
}

function draw(){
	background('#A7CC7F');
	tx+=0.05;
	ty+=0.05;
	fill('#D85026');
	ellipse(map(noise(tx),0,1,0,width),map(noise(ty),0,1,0,height),10,10);
}
