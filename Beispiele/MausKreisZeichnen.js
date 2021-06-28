function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(240);
}

function draw() {
  // put drawing code here
point(10,10);
point(790,590);
point(10,590);
point(790,10);
line(10,10,790,590);

if(mouseIsPressed)
{
	fill(244,mouseY,0);
}
else{
	fill(255);
}
noStroke();
ellipse(mouseX,mouseY,80,80);

}
