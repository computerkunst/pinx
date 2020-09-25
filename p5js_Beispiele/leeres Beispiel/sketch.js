

function setup() {
  // put setup code here
  createCanvas(480, 120);
}

function draw() {
  // put drawing code here
background(240);
if(mouseIsPressed)
{
	fill(0);
}
else{
	fill(255);
}

ellipse(mouseX,mouseY,80,80);

}