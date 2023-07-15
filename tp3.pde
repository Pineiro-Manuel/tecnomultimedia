//TP3 de Manuel Piñeiro
//Legajo: 94736/1
//Link del video: https://www.youtube.com/watch?v=Co4awcc6BHU
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
 dibujarBoton("circ", width/20, height/1-60, 25, 1, "   Comenzar");
 dibujarBoton("cuad", width/20, height/1-30, 25, 11, "   Creditos");
}
 if (pantalla == 1) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/1-60, 30, 2, "    Siguiente");
  }
  if (pantalla == 2) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/1-60, 30, 3, "    Siguiente");
  }
  if (pantalla == 3) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/1-60, 30, 4, "    Siguiente");
  }
  if (pantalla == 4) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/1-60, 30, 5, "    Siguiente");
  }
  if (pantalla == 5) { //Pantalla de desiciones 
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ", width/40, height/1-90, 30, 6, "    A:Intentar Halagar al genio");
 dibujarBoton("circ", width/40, height/1-60, 30, 9, "    B:Morir de la forma mas genial");
 dibujarBoton("circ", width/40, height/1-30, 30, 10, "    C:Salir Corriendo");
}
  if (pantalla == 6) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ",  width/40, height/1-60, 30, 7, "    Siguiente");
  }
  if (pantalla == 7) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ",  width/40, height/1-60, 30, 8, "    Siguiente");
  } 
 if (pantalla == 8) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ",  width/40, height/1-60, 30, 0, "    Reintentar");
  } 
 if (pantalla == 9) { //B
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ",  width/40, height/1-60, 30, 0, "    Reintentar");
  } 
 if (pantalla == 10) { //C
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ",  width/40, height/1-60, 30, 0, "    Reintentar");
  }
  if (pantalla == 11) {
    text(texto[pantalla], 15,15);      
 dibujarBoton("circ",  width/40, height/1-60, 30, 0, "    Menu Principal");
  } 
}
