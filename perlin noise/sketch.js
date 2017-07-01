var bots=[];
function setup() {
  createCanvas(600,600,[WEBGL]);
  for (var i = 0; i < 500; i++) {
  	bots[i]= new creature;
  }
}

function draw(){
	background('#A7CC7F');
	for (var i = 0; i < 500; i++) {
  	bots[i].move();
  }	
}
function creature(){
	this.tx=random(100);
	this.ty=random(100);
	this.move = function(){
		this.tx+=0.01;
		this.ty+=0.01;
		fill('#D85026');
		ellipse(map(noise(this.tx),0,1,0,width),map(noise(this.ty),0,1,0,height),10,10);
	}

}