var canvas 

//////////////////////////////////////

var boxSz = 700;
var numSpheres =100;
var balls = [];
var t = 0.0;
var s = 0;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
 
  for (var i = 0; i < numSpheres; i++) {
    x = random(-boxSz, boxSz);
    y = random(-boxSz, boxSz);
    z = random(-boxSz, boxSz);

    balls[i] = new Ball(x,y,z)
  }
}

function draw() {
  background(25,37,90);
  translate(0,0,-100);

  if(windowWidth < 1200){
    s +=0.3;
    var xpos= cos(radians(s))*180;
    var zpos= sin(radians(s))*180;
    camera(xpos, 0, zpos, width/2, height/2, 0, 0, 1, 0);
  } else {
    camera(mouseX, mouseY, (height/2.0) / tan(PI*30.0 / 180.0), width/2.0, height/2.0, 0, 0, 1, 0);
  }

  translate(width/2,height/2);
  for (var i = 0; i < balls.length; i++) {
    balls[i].display();
  }
  stroke(255);
}

function Ball(_x, _y, _z) {
  this.x = _x;
  this.y = _y;
  this.z = _z;
  this.newX = 0;
  this.newY = 0;
  this.newZ = 0;
  
  this.display = function() {
    push();
      translate(this.x, this.y, this.z);
      sphere(2, 16);
    pop();
  }
  
  this.move = function() {
    this.newX = random(-boxSz, boxSz);
    this.newY = random(-boxSz, boxSz);
    this.newZ = random(-boxSz, boxSz);
  }
  
}