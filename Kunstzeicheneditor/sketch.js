// Was geht hier vor: Wie ist der Code des Kunstzeicheneditors aufgebaut?
// CC JLK 2020
// Was wird alles benötigt
let colorPicker;  // greift auf das Farbpaletten Fenster von javascript zu
let slider;       // greift auf das slidertool von javascript zu

var jepp = 0;
function setup() {
  // put setup code here
  

 // createCanvas(windowWidth-10, windowHeight-10);
  createCanvas(874, 620);// oder Postkartengröße

 button = createButton('drück mich');   // erstellt einen drückbaren Knopf mit der Beschriftung "drück mich"
  button.position(10, 20);      // an dieser Position
  button.mousePressed(HintergrundRandom); // hinterlegt den Funktionsaufrug wenn der Button geklickt wird

  slider = createSlider(0, 3, 2);   // erstellt den Slider von min 0 bis max 3 und voreingestellt auf 2
  slider.position(20, 50);
  slider.style('width', '80px');    // definiert die Breite des Sliders

  slider1 = createSlider(-100, 400, 20);  // erstellt den zweiten Slider von min -100 bis max 400 und voreingestellt auf Wert 20
  slider1.position(20, 80);
  slider1.style('width', '80px');

  colorPicker = createColorPicker('#000000'); // erstellt den ColorPicker mit Schwarz als voreingestellte Farbe
  colorPicker.position(25,110);     // an dieser Position

  button1 = createButton('speichern');    // noch ein Tastfeld
  button1.position(15, 140);
  button1.mousePressed(Aufruf);     // wenn geklickt folgt es dem Aufruf siehe unten



  textSize(20);
  text('das Menü links ermöglicht dir verschiedene Farben auszuwählen, \ndein Werk zu speichern und verschiedene Linien Varianten zu verwenden!', 100, 100, width-100, height-100);
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
  
  jepp = jepp + 1;
  if(jepp > 1){
  let r = random(255);
  let g = random(255);
  let b = random(255);
  background(r,g,b);
  }
  else  background(0);
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
