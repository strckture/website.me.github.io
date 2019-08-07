var canvas 

//////////////////////////////////////

var boxSz = 700;
var numSpheres =100;

var balls = [];

var t = 0.0;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  // init random balls
  for (var i = 0; i < numSpheres; i++) {
    x = random(-boxSz, boxSz);
    y = random(-boxSz, boxSz);
    z = random(-boxSz, boxSz);

    balls[i] = new Ball(x,y,z)
  }
}

function draw() {
  background(25,37,90);
  //background(0);

  translate(0,0,-100);

  camera(mouseX, mouseY, (height/2.0) / tan(PI*30.0 / 180.0), width/2.0, height/2.0, 0, 0, 1, 0);
  translate(width/2,height/2);

  /*
  push();
  translate(200,0,0);
  rotateY(frameCount*0.01);
  fill(0,0,255);
  sphere(50);
  pop();
  */

for (var i = 0; i < balls.length; i++) {
  balls[i].display();
}
/*if (frameCount % 25 == 0) {
  balls[int(random(balls.length))].move();
}
if(frameCount % 100 == 0) {
  for (var i = 0; i < balls.length; i++) {
    balls[i].move();
  }
}*/

//noStroke();
//fill(255,0,0);
stroke(255);
 
} // draw

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
    
      /*this.x = lerp(this.x, this.newX, 0.01);
      this.y = lerp(this.y, this.newY, 0.01);
      this.z = lerp(this.z, this.newZ, 0.01);*/
  }
  
  this.move = function() {
    this.newX = random(-boxSz, boxSz);
    this.newY = random(-boxSz, boxSz);
    this.newZ = random(-boxSz, boxSz);
  }
  
}
