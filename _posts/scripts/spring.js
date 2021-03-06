const height = 500;
const width = 500;

var kSlider;
var mSlider;
var Box = function(x,y, mass, rad){
	this.pos = createVector(x,y);
	this.v = createVector(0,0);
	this.a = createVector(0,0);
	this.mass = mass;
	this.rad = rad;
}

Box.prototype.display = function(){
	fill(100, 255, 255);
	noStroke();
	rectMode(CENTER);
	rect(this.pos.x, this.pos.y, this.rad, this.rad);
}
Box.prototype.changeMass =function(m){this.mass = m;}
Box.prototype.getmass =function(){ return this.mass;}
Box.prototype.run = function(a){
	this.a = a;
	this.v.add(a);
	this.pos.add(this.v);
}

Box.prototype.getpos=function(){ return this.pos;}

var Spring = function(originX, originY, restX, restY, stretch, k){
	this.k = k;
	this.origin = createVector(originX, originY);
	this.rest = createVector(restX, restY);
	this.box = new Box(restX-stretch, restY, 10, 50);
}

Spring.prototype.bounce = function(){
	var a = -this.k*(this.box.getpos().x-this.rest.x)/this.box.getmass();
	this.box.run(a);
}

Spring.prototype.display = function(){

	stroke(100*Math.sqrt(this.k/this.box.getmass())%255, 255,255);
	fill(100*Math.sqrt(this.k/this.box.getmass())%255, 255,255);
	strokeWeight(2);
	var springLength =2*(this.box.getpos().x-10-this.origin.x)/3;
	var springRad = height/20;
	var springNum =20;
	line(this.origin.x, this.origin.y, this.origin.x + (springLength)/6,this.origin.y);
	line(this.origin.x + springLength/6 ,this.origin.y, this.origin.x + springLength/6+springLength/springNum,this.origin.y - springRad);
	for (var i = 1; i<springNum-1; i++){
		line(this.origin.x + springLength/6 +i*springLength/springNum,this.origin.y + pow(-1, i)*springRad, this.origin.x + springLength/6+(i+1)*springLength/springNum,this.origin.y + pow(-1, i+1)*springRad);
	}

	line(this.origin.x + springLength/6 + (springNum - 1)*springLength/springNum ,this.origin.y-springRad, this.origin.x + springLength/6+springLength,this.origin.y);
	line(this.origin.x + springLength/6+springLength,this.origin.y, this.box.getpos().x-10, this.origin.y);
	this.box.display();
}

Spring.prototype.update = function(){
	this.k = kSlider.value();
	this.box.changeMass(mSlider.value());
}


var spring;
var stretch = 50;
function setup(){
	colorMode(HSB);
	createCanvas(500,500);
	spring = new Spring(0, height/2, width/2, height/2, stretch, 1);
	kSlider = createSlider(1,10,1);
	kSlider.position(50,10);
	mSlider = createSlider (10, 100, 10);
	mSlider.position(50,50);
}
function draw(){
	background(255);
	spring.bounce();
	spring.display();
	spring.update(10);
	fill(0);
	stroke(0);
	strokeWeight(1);
	text("k", 35, 25);
	text("m", 35, 65);
}
