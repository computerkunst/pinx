
var radius = 40;
var x = 110;
var y = 100;
var speed = 0.5;
var speedx = 0.5;
var xdirection = 1;
var ydirection = 1;
var farbe = 100;
var farbe1 = 70;


function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(230);
  ellipseMode(RADIUS);
  noCursor();
}

function draw() {
  // put drawing code here
  //background(0);

	if(mouseIsPressed) 
	{
	fill(244,mouseY,0);
	speed = 2;
	}

else{
	fill(farbe, farbe1, farbe1*ydirection);
	}


if((x > width-radius) || (x < radius)){
	xdirection = -xdirection;
	speedx = random(3);
	farbe = random(255);
	if(speedx < 1) {
		speed = 2; speedx = 2;
	}
}
if((y > height-radius) || (y < radius)){
	ydirection = -ydirection;
	farbe1 = random(255);
	speed = random(4);
	if(speed < 1){
		speed = 2; speedx = 2;
	}	
	} 

x += speedx * xdirection;
y += speed * ydirection;
print(xdirection);
print(ydirection);
//noStroke();
//ellipse(x,y,80,80);
ellipse(x,y, radius, radius);

}


/*



*/
