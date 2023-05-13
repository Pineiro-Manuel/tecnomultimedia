//TP1 de Manuel Piñeiro
// Legajo: 94736/1
// Comisión 5

int pantalla = 0;
int contador = 0;
PImage image1;
PImage image2;
PImage image3;

int posicionXBoton = 239;
int posicionYBoton = 386;
int tamanioEnXBoton = 239;
int tamanioEnYBoton = 386;
color colorDeTexto = #0DF5FF;
color colorDeLineaDeBoton =#FF150D ;
color colorDeFondo=#FCFCFC;
color colorDeBoton = #FCFCFC;
boolean botonOk  = false;
float transition=3;
void setup () {
 size(640,480);
 textSize(25);
image1= loadImage("LosMartillos.png");
image2= loadImage("PrimerMatillo.png");
image3= loadImage("MartilloCobre.png");
} 
void draw() {
  println("X:");
println(mouseX);
println("Y:");
println(mouseY);
background(#030200);
  switch (pantalla) {
  case 0:
  image(image2,0,1,640,510);

  colorDeFondo = 0;
  contador++;
    println("Estado 0 ", contador);
    if (contador >= 400) {
      contador = 0;
      pantalla = 1;
    } 
 fill(255, 0, 0, contador);

text("Los primeros martillos se crearon en la Edad \nde Piedra alrededor del año 8000 a. C.\n Estos martillos constaban de una piedra\n atada a un mango con tiras de cuero", width/6, height/6);

    break;
 
  case 1:
    image(image3,0,1,640,510);
    colorDeFondo = 255;
    contador++;
    println("Estado 1 ", contador);
    if (contador >= 400) {
      contador = 0;
      pantalla = 2;
    fill(#1824ED);  
 
  }
    fill(#0A0701,contador);  
    text("Algunos milenios mas tarde, aproximadamente\n en el 4000 A.C Los romanos descubrieron el\n cobre y fue utilizado para la cabeza del martillo",width/6, height/6);
    break;

  case 2:
    image(image1,0,0);
    contador++;
    colorDeFondo = 127;
    stroke(colorDeLineaDeBoton);
    fill(colorDeBoton);
    rect(posicionXBoton, posicionYBoton, tamanioEnXBoton, tamanioEnYBoton);
    fill(#1824ED);
    text("Reiniciar", posicionXBoton + tamanioEnXBoton/12, posicionYBoton + tamanioEnYBoton / 8);
   
    println("Estado 2 ", contador);
fill(#1824ED,contador);
    text("Y con el pasar delo años, se dejo de usar cobre\n para la cabeza del martillo. Pero siempre\n usando un mismo diseño",width/6, height/6);
    break;
  }
}

void mouseMoved() {

  if (mouseX > posicionXBoton && mouseX < posicionXBoton + tamanioEnXBoton
    && mouseY > posicionYBoton && mouseY < posicionYBoton + tamanioEnYBoton) {
    colorDeLineaDeBoton = color(#0DF5FF);
    colorDeBoton = color(#5CFF0D);
    colorDeTexto = color(#0DF5FF);
    botonOk = true;
  } else {
    colorDeLineaDeBoton  = (#FF150D);
    colorDeBoton = (#FF150D);
    colorDeTexto = (#050000);
    botonOk = false;
  }
}

void mouseClicked() {
  if (botonOk == true) {
    pantalla = 0;
    contador=0;  
}
}   
  
