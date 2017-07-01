var balls=[];
function setup() {
  createCanvas(windowWidth,windowHeight,[WEBGL]);
	for (var i = 0; i < 500; i++) {
		balls[i]= new ball;
	}
}
function draw(){
	background('#365698');
	fill('#EA783B');
	for (var i = 0; i < balls.length; i++) {
		balls[i].render();
	}
	translate(width/2,height/2);
	textSize(80);
	fill(255);
	stroke(0);
	textFont("Verdana");
	textAlign(CENTER);
	text("JOEYDASH",0,0);

}
function ball(){
	this.location=createVector(random(0,width),random(0,height));
	this.velocity=createVector(random([1,-1]),random([1,-1]));
	this.render = function () {
		this.location.add(this.velocity);
		ellipse(this.location.x,this.location.y,10,10);
		if (this.location.x>width-10) {
			this.velocity.x=-this.velocity.x;
		}if (this.location.x<10) {
			this.velocity.x=-this.velocity.x;
		}if (this.location.y>height-10) {
			this.velocity.y=-this.velocity.y;
		}if (this.location.y<10) {
			this.velocity.y=-this.velocity.y;
		}if () {}
	}
}
