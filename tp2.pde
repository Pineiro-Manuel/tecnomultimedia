//Manuel Piñeiro (94736/1)
// COMISION 5
// Link del video: https://www.youtube.com/watch?v=lZxg_Lw5iZU

int posX = 400, posY = 0; 
int ancho, alto;
int cantidad = 20;
int cantidadXDeModulos;
int cantidadYDeModulos;
int anchoDeModulo;
int altoDeModulo;
PImage P;
color currentColor; //color actual
color originalColor;

void setup() {
size(800, 400);

currentColor = color(255);
originalColor = currentColor;
  rectMode(CENTER);
  cantidadXDeModulos = 10;
  cantidadYDeModulos = 5;
  anchoDeModulo = width/8; //ancho 
  altoDeModulo = height/4; //alto 
  alto = altoDeModulo/cantidad;
  ancho = anchoDeModulo/cantidad;
P=loadImage("OP1.png");
}

void draw() {
  background(#F50000);
  println("X:");
println(mouseX);
println("Y:");
println(mouseY);
  for (int i = 1; i < cantidadXDeModulos; i++) {
    for (int j = 0; j < cantidadYDeModulos; j++) {
     
      dibujarModulo(i, j);
    }
image(P,0,0,400,400);}
}


void modulo(int x, int pX, int pY) {
color colorA = currentColor;
color colorB = currentColor;
push();
if (x % 2 == 0) {
fill(0);
} else {
fill(lerpColor(colorA, colorB, map(x,0,9,0,1)));}
translate(pX * anchoDeModulo, pY * altoDeModulo);
rect(10, 10, ancho * x, alto * x);
fill(lerpColor(colorA, colorB, .8));
pop();
}


void dibujarModulo(int parametroX, int parametroY) {
for (int i = cantidad; i > 0; i--) {
modulo(i, parametroX, parametroY);
}
}
void mouseMoved() {
currentColor = color(random(255), random(255), random(255));
}

void keyPressed() {  
if (key == 'r' || key == 'R') {
currentColor = originalColor;}
}
