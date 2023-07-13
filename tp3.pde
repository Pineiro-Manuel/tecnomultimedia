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
  imagenes = new PImage[12]; // Establece el tamaño del arreglo

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
 dibujarBoton("circ", width/40, height/2, 30, 1, "    Siguiente");
  }
  if (pantalla == 2) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/2, 30, 1, "    Siguiente");
  }
  }
