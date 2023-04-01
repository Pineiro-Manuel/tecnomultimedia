int px, py;
PImage P;

void setup (){
 size(800,400);
P= loadImage("Martillo.JPG");
 background(255);
}
void draw(){
  image(P,400,1,400,400); 
fill(#403D3D);//Color Negro
rect(180,179,40,212);
println("X:");
println(mouseX);
println("Y:");
println(mouseY);
line(399,0,398,399);
fill(#E9FF03); //Color Amarillo
rect(181,72,38,107);
fill(#063267);//Color Azul
rect(180,0,40,72);
fill(#FFFFFF);//Color Blanco
rect(194,86,15,80);
fill(#063267);
rect(130,7,50,28);
fill(#E3DCDC);//Color Gris
rect(125,6,23,30);
fill(#063267);
rect(220,0,10,35);
fill(#063267);
triangle(229,0,276,70,229,36);

}  
