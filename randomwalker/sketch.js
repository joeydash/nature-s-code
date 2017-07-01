var walker;
function setup() {
  createCanvas(600,600,[WEBGL]);
  background(200);
  walker= new walker();
}
function draw(){
	walker.render();
	walker.step();
	
}
function walker(){
	this.x=width/2;
	this.y=height/2;
	this.render = function(){
		stroke(0);
		fill(0);
		ellipse(this.x,this.y,3,3);
	}
	this.step  = function(){
		var x= floor(random(4));
		if (x==0) {
			this.x++;
		}if (x==1) {
			this.x--;
		}if (x==2) {
			this.y++;
		}if (x==3){
			this.y--;
		}
		constrain(this.x,0,width);
		constrain(this.y,0,height);
	}
}