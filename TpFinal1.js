//Trabajo Final de Manuel Piñeiro
//Legajo: 94736/1
//Comición 5
//Cuento: "El pescador y el Genio"
//Juego: Frog

let miAventura

function setup() {
  createCanvas(windowWidth, windowHeight)
  miAventura = new Aventura()
  //texto[i] = texto[i].replaceAll("\\\\n", "\n")
}

function draw() {
  miAventura.dibujar()
}

function mouseClicked() {
  miAventura.cambiarEstado()
}

function keyPressed(){
    juego.keyPressed()
}

function keyReleased(){
    juego.keyReleased()()
}
