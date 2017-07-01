var ball;
function setup() {
  createCanvas(600,600,[WEBGL]);
  ball = new ball;
}
function draw(){
	background(200);
	ball.render();
}
function mouseClicked(){
	ball.setlocation();
}
function ball(){
	this.location=createVector(width/2,height/2);
	this.velocity=createVector(-1,-1);
	this.render = function () {
		this.location.add(this.velocity);
		ellipse(this.location.x,this.location.y,10,10);
		if (this.location.x>590) {
			this.velocity.x=-this.velocity.x;
		}if (this.location.x<10) {
			this.velocity.x=-this.velocity.x;
		}if (this.location.y>590) {
			this.velocity.y=-this.velocity.y;
		}if (this.location.y<10) {
			this.velocity.y=-this.velocity.y;
		}
	}
	this.setlocation = function() {
		this.location=createVector(mouseX,mouseY);		
	}
}
