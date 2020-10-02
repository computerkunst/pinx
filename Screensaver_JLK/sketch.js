 // hier werden wichtige Werte / Variablen gesetzt und können hier auch ohne im Code zu suchen geändert werden 
var radius = 40;	// Größe der Ellipse kann ganz einfach hier verändert werden
var x = 110;		// Startkoordinaten der Ellipse
var y = 100;
var speed = 0.5;	// in welcher Geschwindigkeit bewegt sie sich vorwärts
var speedx = 0.5;
var xdirection = 1;	// gibt die Richtung vor in die sich das Objekt bewegt
var ydirection = 1;
var farbe = 100;	// Startwerte der Farbe
var farbe1 = 70;


function setup() {
  // hier kommt alles rein was den Arbeitsbereich / die Leinwand (=Canvas) definiert
  createCanvas(800, 600);  		// Erstellung der Leinwand in (x,y) Größe
  background(230);			// definieren der Farbe des Hintergrunds background(rotWert,grünWert,blauWert) oder background(schwarzwert)
  ellipseMode(RADIUS);
  noCursor();				// im Bereich der Canvas wird der Mauszeiger (=Cursor) nicht angezeigt
}

function draw() {
  // hier kommt nun alles was gezeichnet werden soll rein
  //background(0);

ellipse(x,y, radius, radius);		// zeichnet eine Ellipse mit folgenden Werten 
	
x += speedx * xdirection;		// X Achse: wo soll sich die Ellipse hinbewegen und wie schnell? += der Wert verändert sich immer weiter dadurch kommt die Bewegung
y += speed * ydirection;		// Y Achse
print(xdirection);			// hier wird der Wert xdirection also die Richtung ausgegeben du findest ihn in der Webkonsole deines Browsers bei Firefox STRG + Umschalt + K
print(ydirection);			// oder unter Extras / Web-Entwickler / Web-Konsole

	
 if(mouseIsPressed) 		// Anweisung was getan werden soll WENN: der Maustaster gedrückt wird
	{
	fill(mouseX,mouseY,x);	// die Farbe verändert sich je nach Koordinaten des (unsichtbaren) Mauszeigers
	//speed = 2;			// hier könnte noch die Geschwindigkeit verändert werden
	}


if((x > width-radius) || (x < radius)){ // jetzt wird es kompliziert. 
					// Hier geht es darum, dass die Ellipse immer wieder automatisch vom Rand auf der X-Achse also links und rechts abprallt
	xdirection = -xdirection;	// invertiert die Richtung
	speedx = random(4);		// verändert die Geschwindigkeit zufällig. Entweder 1,2,3,4 oder 0
	farbe = random(255);		// verändert zufällig die Farbe wenn es den Rand berührt
	if(speedx < 1) {		// sollte die Geschwindigkeit zufällig unter 1 sein (also 0) dann doch bitte mit 2 zweiter machen
		speed = 2; speedx = 2;
	}
}
if((y > height-radius) || (y < radius)){ // Hier geht es darum, dass die Ellipse immer wieder automatisch vom Rand auf der Y-Achse also oben und unten abprallt
	ydirection = -ydirection;
	farbe1 = random(255);
	speed = random(4);
	if(speed < 1){
		speed = 2; speedx = 2;
	}	
	} 

}


/*

else{
	fill(farbe, farbe1, farbe1*ydirection);
	}

*/
