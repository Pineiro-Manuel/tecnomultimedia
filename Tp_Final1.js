//Trabajo Final de Manuel Piñeiro
//Legajo: 94736/1
//Comición 5
//Cuento: "El pescador y el Genio"
//Juego: Frog

let aventura
function setup(){
  createCanvas(windowWidth, windowHeight)
    background(120)
    aventura = new miAventura()
    textSize(12)
}


function draw() {
  aventura.dibujar()
}

function mouseClicked() {
  aventura.mouseClicked()
}

function keyPressed() {
  aventura.juego.keyPressed()
}

function keyReleased() {
  aventura.juego.keyReleased()
}
