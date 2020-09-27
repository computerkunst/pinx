
let colorPicker;
let slider;
function setup() {
  // put setup code here
  

 // createCanvas(windowWidth-10, windowHeight-10);
  createCanvas(874, 620);// oder Postkartengröße

  button = createButton('drück mich');
  button.position(10, 20);
  button.mousePressed(HintergrundRandom);


 

  colorPicker = createColorPicker('#000000');
  colorPicker.position(35,80);

  slider = createSlider(0, 3, 2);
  slider.position(20, 110);
  slider.style('width', '80px');


  slider1 = createSlider(-100, 400, 20);
  slider1.position(20, 50);
  slider1.style('width', '80px');

  button1 = createButton('speichern');
  button1.position(15, 140);
  button1.mousePressed(Aufruf);


  textSize(20);
  text('das Menü links ermöglicht dir verschieden Farben auszuwählen, dein Werk zu speichern und verschiedene Linien Varianten zu verwenden!', 100, 100, width-100, height-100);
}
  
  

function draw() {
  // put drawing code here
//background(0,100,200);
let val = slider.value();
let val1 = slider1.value();
if(mouseIsPressed && val == 0)
{
  line(mouseX,mouseY,(width/2),(height/2));
  stroke(colorPicker.color());
  print(val1);

}
if(mouseIsPressed && val == 1)
{
  line(movedX,mouseY,mouseX,movedY);
  stroke(colorPicker.color());
  let m = map(val1, -100, 400, 1, 6);
  strokeWeight(m);
  print(val1);
}

if(mouseIsPressed && val == 2)
{
	line(mouseX,mouseY,mouseX-80,mouseY-180);
	stroke(colorPicker.color());

}

if(mouseIsPressed && val == 3)
{
	line(mouseX-random(-100,val1),mouseY-random(-100,val1),mouseX-random(-100,val1),mouseY-random(-100, val));
	stroke(colorPicker.color());
  print(val1);

}
else{
	
}

}


//////////////////////////////77

function HintergrundRandom() {
  let r = random(255);
  let g = random(255);
  let b = random(255);
  background(r,g,b);
}

function Aufruf(){
	
	//img = createImage(10, 10);
	save('Komputerkunst.png');
	//save('NeuesKunstwerk.jpg');
}

/* // nur aktivieren wenn Resizing erwünscht ist zum Beispiel bei Smartphonenutzung
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/