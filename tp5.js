//Manuel Piñeiro
//Legajo: 94736/1
//La precuela del pescador y el Genio
//Link: 

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
