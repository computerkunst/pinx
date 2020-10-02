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
  colorPicker.position(25,110);     		// an dieser Position

  button1 = createButton('speichern');    // noch ein Tastfeld
  button1.position(15, 140);
  button1.mousePressed(Aufruf);     // wenn geklickt folgt es dem Aufruf siehe unten



  textSize(20);
  text('das Menü links ermöglicht dir verschiedene Farben auszuwählen, \ndein Werk zu speichern und verschiedene Linien Varianten zu verwenden!', 100, 100, width-100, height-100);
} 

function draw() {
  // put drawing code here
let val = slider.value();
let val1 = slider1.value();
	
//////////////////////// 4 Verschiedene Linien Programme werden jenachdem wie der Wert von slider.value ist eingestellt und aufgerufen
if(mouseIsPressed && val == 0)		/// Programm 0
	{
  line(mouseX,mouseY,(width/2),(height/2));	// eine linie wird gezeichnet mit Startpunkt mouseX,Y Koordinaten und Endpunkt der halben Höhe und Breite = Zentrum in der Mitte
  stroke(colorPicker.color());			// Farbe wird bestimmt
  print(val1);					// Kontrollausgabe in Konsole
	}
if(mouseIsPressed && val == 1)		//// Programm 1
	{
  line(movedX,mouseY,mouseX,movedY);		// eine linie wird gezeichnet mit unterschiedlichen Variablen von mouseX,Y bzw. movedX und movedY
  stroke(colorPicker.color());			// Farbe wird bestimmt
  let m = map(val1, -100, 400, 1, 6);		// die Dicke der Linie kann hier bestimmt werden und wirkt sich auf alle anderen Programme aus!
  strokeWeight(m);				// hier wird die strokeWeight also die Liniendicke angewendet Variable m
  print(val1);
}

if(mouseIsPressed && val == 2)		//// Programm 2
{
 let laenge = map(val1, -100,400, 0,600)
   line(mouseX,mouseY,mouseX-laenge,mouseY-laenge);	// am simpelsten einfach nur eine Schräge Linie im Raum mit vordefinierter Länge
   stroke(colorPicker.color());
	

}

if(mouseIsPressed && val == 3)		//// Programm 3
	{			// das letzte Programm definiert die Linienposition innerhalb einen gewissen Größenrahmens selbst.
  line(mouseX-random(-100,val1),mouseY-random(-100,val1),mouseX-random(-100,val1),mouseY-random(-100, val));
  stroke(colorPicker.color());
  print(val1);

	}

}


//////////////////////////////77
function HintergrundRandom() {		// hier wird durch den Button "drück mich" die zufällige Hintergrundfarbe gewählt. Allerdings erzeugt der erste Klick die Farbe weiß
  jepp = jepp + 1;
  if(jepp > 1){
  let r = random(255);
  let g = random(255);
  let b = random(255);
  background(r,g,b);
  }
  
  else  {
	  createCanvas(874,620);
	  background(255,255,255,0);
}

function Aufruf(){
  save('Komputerkunst.png');		// als .png Bild speichern
  //save('NeuesKunstwerk.jpg');		// als .jpg Bild ginge natürlich auch
}

/* // nur aktivieren wenn Resizing erwünscht ist zum Beispiel bei Smartphonenutzung
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
*/
