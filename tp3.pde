//TP3 de Manuel Piñeiro
//Legajo: 94736/1
int pantalla = 0;
boolean on;
PImage[] imagenes;
String texto[];
String textosPantallaUno[];

void setup() {
  size(600, 600);
  rectMode(CENTER);
  texto = loadStrings("MiTexto.txt"); 
  imagenes = new PImage[12]; 

  for (int i = 0; i <12; i++) {
    texto[i] = texto[i].replaceAll("\\\\n", "\n");
    imagenes[i] = loadImage(i+".png");
    imagenes[i].resize(width, height);
  }
textSize(20);
}

void draw() {
println("X:");
println(mouseX);
println("Y:");
println(mouseY);
  dibujarPantallas();
}
void dibujarPantallas() {

  image(imagenes[pantalla], 0, 0);
 
if (pantalla == 0) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/20, height/2, 30, 1, "   Comenzar");
  }
  else if (pantalla == 1) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 2, "    Siguiente");
  }
  if (pantalla == 2) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 3, "    Siguiente");
  }
  if (pantalla == 3) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 4, "    Siguiente");
  }
  if (pantalla == 4) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 5, "    Siguiente");
  }
  if (pantalla == 5) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 6, "    A:Intentar alagar al genio");
  }
  if (pantalla == 6) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 7, "    Siguiente");
  }
  }
