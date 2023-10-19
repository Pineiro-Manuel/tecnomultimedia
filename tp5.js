//Manuel Piñeiro
//Legajo: 94736/1
//La precuela del pescador y el Genio
//Link: hacer el video

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
