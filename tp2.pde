//TP2 de Manuel Piñeiro (94736/1)
//Comisión 5
int posX = 600, posY = 199;
float r = 20, rd;
PImage P;
color currentColor; //color actual
color originalColor;

void setup(){
size(800,400);
P=loadImage("OP1.png");
background(255);
rectMode(CENTER);
currentColor = color(255);
originalColor = currentColor;
}

void draw(){
println("X:");
println(mouseX);
println("Y:");
println(mouseY);
  image(P,0,0,400,400); 

for(int i =20; i > 0; i--){ 
if(i%2 == 0){ 
fill(0);
rect(posX - rd, posY, i*r, i*r);
}else{
fill(currentColor);
rect(posX + rd, posY, i*r, i*r);
}
}
}  

void mouseMoved() {
  currentColor = color(random(255), random(255), random(255));
}

void keyPressed() {
  
 if (key == 'r' || key == 'R') {
    currentColor = originalColor; 
  }
}
