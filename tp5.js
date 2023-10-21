//Tp5 de Manuel Piñeiro
//Legajo: 94736/1
//Comision 5
//La precuela del pescador y el Genio
//Link: https://www.youtube.com/watch?v=a6PQNbrhFBc

let juego

function setup() {
  createCanvas(windowWidth, windowHeight)
  juego = new Juego()
}

function draw() {
  juego.dibujar()
}

function keyPressed(){
    juego.keyPressed()
}
function keyReleased(){
    juego.keyReleased()()
}
