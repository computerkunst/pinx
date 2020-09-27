
let colorPicker;
let slider;
function setup() {
  // put setup code here
  

  createCanvas(windowWidth-10, windowHeight-10);
  button = createButton('drück mich');
  button.position(10, 19);
  button.mousePressed(HintergrundRandom);

  button1 = createButton('speichern');
  button1.position(120, 19);
  button1.mousePressed(Aufruf);
 

  colorPicker = createColorPicker('#000000');
  colorPicker.position(260,19);

  slider = createSlider(0, 3, 2);
  slider.position(360, 19);
  slider.style('width', '80px');
}
  
  

function draw() {
  // put drawing code here
//background(0,100,200);
let val = slider.value();
if(mouseIsPressed && val == 0)
{
	ellipse(mouseX,mouseY,80,80);
	fill(colorPicker.color());
	stroke(mouseX,movedX,mouseY);

}
if(mouseIsPressed && val == 1)
{
	rect(mouseX,mouseY,80,80);
	fill(mouseX,movedX,mouseY);
	noStroke();

}

if(mouseIsPressed && val == 2)
{
	line(mouseX,mouseY,mouseX-80,mouseY-180);
	stroke(colorPicker.color());

}

if(mouseIsPressed && val == 3)
{
	line(mouseX,mouseY,mouseX-random(-100,80),mouseY-random(180));
	stroke(colorPicker.color());

}
else{
	
}



//print(val1);

}


//////////////////////////////77

function HintergrundRandom() {
  let val = random(255);
  background(val);
}

function Variable1() {
  var var1 = random(4);
  print(var1);
}
function Aufruf(){
	
	//img = createImage(10, 10);
	save('Komputerkunst.png');
	//save('NeuesKunstwerk.jpg');
}


function windowResized() {
  resizeCanvas(800, 600);
}